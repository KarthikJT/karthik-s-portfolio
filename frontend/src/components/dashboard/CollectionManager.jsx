import { useEffect, useState } from "react";
import api from "../../services/api";
import ImageUploader from "./ImageUploader";

/**
 * Generic CRUD manager used by every list-type dashboard page
 * (Education, Skills, Internships, Projects, Hackathons, Certifications,
 * Achievements, Social Links).
 *
 * fields: [{ name, label, type: 'text' | 'textarea' | 'list' | 'number', required }]
 *   - 'list' fields are edited as a comma-separated string and stored as an array.
 */
const emptyFormFrom = (fields) =>
  fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {});

const toFormValues = (fields, doc) => {
  const values = {};
  fields.forEach((f) => {
    const raw = doc[f.name];
    values[f.name] = f.type === "list" ? (raw || []).join(", ") : raw ?? "";
  });
  return values;
};

const toPayload = (fields, values) => {
  const payload = {};
  fields.forEach((f) => {
    if (f.type === "list") {
      payload[f.name] = values[f.name]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else if (f.type === "number") {
      payload[f.name] = values[f.name] === "" ? 0 : Number(values[f.name]);
    } else {
      payload[f.name] = values[f.name];
    }
  });
  return payload;
};

const CollectionManager = ({ title, description, resourcePath, fields, titleField, imageActions = [] }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyFormFrom(fields));
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    const res = await api.get(resourcePath);
    setItems(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourcePath]);

  const startCreate = () => {
    setEditingId(null);
    setForm(emptyFormFrom(fields));
    setShowForm(true);
    setError("");
  };

  const startEdit = (doc) => {
    setEditingId(doc._id);
    setForm(toFormValues(fields, doc));
    setShowForm(true);
    setError("");
  };

  const handleChange = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = toPayload(fields, form);
      if (editingId) {
        await api.put(`${resourcePath}/${editingId}`, payload);
      } else {
        await api.post(resourcePath, payload);
      }
      setShowForm(false);
      await fetchItems();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this entry? This cannot be undone.")) return;
    await api.delete(`${resourcePath}/${id}`);
    fetchItems();
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          {description && <p className="text-text-secondary text-sm mt-1">{description}</p>}
        </div>
        <button
          onClick={startCreate}
          className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dark transition-colors flex-shrink-0"
        >
          + Add New
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-xl2 p-6 mb-8 space-y-4"
        >
          <h2 className="font-semibold mb-2">{editingId ? "Edit entry" : "New entry"}</h2>
          {fields.map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium mb-1.5">
                {f.label} {f.type === "list" && <span className="text-text-secondary font-normal">(comma separated)</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  required={f.required}
                  rows={3}
                  value={form[f.name]}
                  onChange={(e) => handleChange(f.name, e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-2.5 bg-background focus:border-accent outline-none"
                />
              ) : (
                <input
                  type={f.type === "number" ? "number" : "text"}
                  required={f.required}
                  value={form[f.name]}
                  onChange={(e) => handleChange(f.name, e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-2.5 bg-background focus:border-accent outline-none"
                />
              )}
            </div>
          ))}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dark transition-colors disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border border-border px-6 py-2.5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-text-secondary text-sm">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-text-secondary text-sm">Nothing added yet. Use "+ Add New" to create the first entry.</p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4"
            >
              <p className="font-medium truncate">{item[titleField] || "Untitled"}</p>
              <div className="flex gap-2 flex-shrink-0 flex-wrap justify-end">
                {imageActions.map((action) => (
                  <ImageUploader
                    key={action.label}
                    endpoint={action.buildEndpoint(item)}
                    fieldName={action.fieldName}
                    multiple={action.multiple}
                    label={action.label}
                    onDone={fetchItems}
                  />
                ))}
                <button
                  onClick={() => startEdit(item)}
                  className="text-sm border border-border px-4 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-sm border border-border px-4 py-1.5 rounded-full hover:border-red-400 hover:text-red-500 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionManager;
