import { useEffect, useState } from "react";
import api from "../../services/api";

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
    } else {
      payload[f.name] = values[f.name];
    }
  });
  return payload;
};

const SingletonEditor = ({ title, description, resourcePath, fields, children }) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const fetchDoc = async () => {
    setLoading(true);
    const res = await api.get(resourcePath);
    setForm(toFormValues(fields, res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchDoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourcePath]);

  const handleChange = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await api.put(resourcePath, toPayload(fields, form));
      setSaved(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-text-secondary text-sm">Loading...</p>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description && <p className="text-text-secondary text-sm mt-1">{description}</p>}
      </div>

      {children}

      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl2 p-6 space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium mb-1.5">
              {f.label} {f.type === "list" && <span className="text-text-secondary font-normal">(comma separated)</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                rows={4}
                value={form[f.name] ?? ""}
                onChange={(e) => handleChange(f.name, e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 bg-background focus:border-accent outline-none"
              />
            ) : (
              <input
                type="text"
                value={form[f.name] ?? ""}
                onChange={(e) => handleChange(f.name, e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 bg-background focus:border-accent outline-none"
              />
            )}
          </div>
        ))}

        {error && <p className="text-sm text-red-600">{error}</p>}
        {saved && <p className="text-sm text-green-700">Saved successfully.</p>}

        <button
          type="submit"
          disabled={saving}
          className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dark transition-colors disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default SingletonEditor;
