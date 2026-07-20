import { useRef, useState } from "react";
import api from "../../services/api";

/**
 * A small "Upload image" button used inline in dashboard list rows.
 * fieldName must match the multer field name configured on the backend route
 * (e.g. "banner", "certificateImage", "companyLogo", "image", "certificate").
 * multiple=true posts to array endpoints like /projects/:id/images.
 */
const ImageUploader = ({ endpoint, fieldName, multiple = false, onDone, label = "Upload image" }) => {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFiles = async (e) => {
    const files = e.target.files;
    if (!files?.length) return;
    setUploading(true);
    try {
      const formData = new FormData();
      if (multiple) {
        Array.from(files).forEach((file) => formData.append(fieldName, file));
        await api.post(endpoint, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        formData.append(fieldName, files[0]);
        await api.put(endpoint, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      onDone?.();
    } catch (err) {
      alert(err.response?.data?.message || "Upload failed.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={handleFiles}
      />
      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="text-sm border border-border px-4 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors disabled:opacity-60"
      >
        {uploading ? "Uploading..." : label}
      </button>
    </>
  );
};

export default ImageUploader;
