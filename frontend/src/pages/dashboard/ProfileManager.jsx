import { useEffect, useState } from "react";
import api from "../../services/api";
import SingletonEditor from "../../components/dashboard/SingletonEditor";
import ImageUploader from "../../components/dashboard/ImageUploader";

const FIELDS = [
  { name: "name", label: "Full Name" },
  { name: "designation", label: "Designation" },
  { name: "tagline", label: "One-line Introduction" },
  { name: "aboutMe", label: "About Me", type: "textarea" },
  { name: "interests", label: "Interests", type: "list" },
  { name: "languagesKnown", label: "Languages", type: "list" },
  { name: "location", label: "Location" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone Number" },
];

const ProfileManager = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const res = await api.get("/profile");
    setProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <SingletonEditor
      title="Profile & Hero"
      description="This information powers the Home (hero) and About sections of your portfolio."
      resourcePath="/profile"
      fields={FIELDS}
    >
      <div className="bg-card border border-border rounded-xl2 p-6 mb-6 flex flex-wrap gap-8">
        <div>
          <p className="text-sm font-medium mb-2">Profile Photo</p>
          <div className="w-24 h-24 rounded-full border border-border bg-background overflow-hidden mb-3 flex items-center justify-center">
            {profile?.profilePhoto?.url ? (
              <img src={profile.profilePhoto.url} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-text-secondary">No photo</span>
            )}
          </div>
          <ImageUploader
            endpoint="/profile/photo"
            fieldName="profilePhoto"
            label="Upload Photo"
            onDone={fetchProfile}
          />
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Hero Background Image (optional)</p>
          <div className="w-40 h-24 rounded-lg border border-border bg-background overflow-hidden mb-3 flex items-center justify-center">
            {profile?.heroImage?.url ? (
              <img src={profile.heroImage.url} alt="Hero" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-text-secondary">No image</span>
            )}
          </div>
          <ImageUploader
            endpoint="/profile/hero-image"
            fieldName="heroImage"
            label="Upload Hero Image"
            onDone={fetchProfile}
          />
        </div>
      </div>
    </SingletonEditor>
  );
};

export default ProfileManager;
