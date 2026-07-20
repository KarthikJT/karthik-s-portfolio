const Footer = ({ name }) => (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-text-secondary">
      <p>© {new Date().getFullYear()} {name || "Karthik JT"}. All rights reserved.</p>
      <p>Built with the MERN stack.</p>
    </div>
  </footer>
);

export default Footer;
