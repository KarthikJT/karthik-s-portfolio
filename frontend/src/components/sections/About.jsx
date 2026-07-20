import Card from "../Card";
import SectionHeading from "../SectionHeading";

const About = ({ profile }) => {
  if (!profile) return null;
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 md:col-span-2">
            <h3 className="font-semibold text-lg mb-3">About Me</h3>
            <p className="text-text-secondary leading-relaxed">{profile.aboutMe}</p>
          </Card>

          <div className="grid gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-text-secondary text-sm">{profile.location}</p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-text-secondary text-sm break-all">{profile.email}</p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-text-secondary text-sm">{profile.phone}</p>
            </Card>
          </div>

          {profile.interests?.length > 0 && (
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs bg-background border border-border px-3 py-1.5 rounded-full text-text-secondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {profile.languagesKnown?.length > 0 && (
            <Card className="p-6 md:col-span-2">
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {profile.languagesKnown.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs bg-background border border-border px-3 py-1.5 rounded-full text-text-secondary"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
