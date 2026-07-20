const ICONS = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.17v3.21c0 .3.21.66.79.55A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.95 4.57a9.83 9.83 0 01-2.83.78 4.96 4.96 0 002.17-2.72 9.9 9.9 0 01-3.13 1.2 4.92 4.92 0 00-8.39 4.48A13.98 13.98 0 011.64 3.16a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.93 4.93 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 20.4a13.94 13.94 0 007.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63a10.02 10.02 0 002.41-2.5z" />
    </svg>
  ),
  LeetCode: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M13.48.5a1.5 1.5 0 011.06.44l3.5 3.5a1.5 1.5 0 01-2.12 2.12l-2.44-2.44-6.4 6.4 6.4 6.4a1.5 1.5 0 11-2.12 2.12l-7.46-7.46a1.5 1.5 0 010-2.12L11.36 1.94A1.5 1.5 0 0113.48.5z" />
    </svg>
  ),
  HackerRank: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM8.5 6h1.8v3.4H12V6h1.8v8.6H12v-3.6H10.3v3.6H8.5V6zm7.2 8.6c-1.8 0-2.7-1.1-2.7-2.9V9.9c0-1.8.9-2.9 2.7-2.9s2.6 1 2.7 2.6h-1.7c0-.6-.3-1-1-1s-1 .5-1 1.3v1.8c0 .8.3 1.3 1 1.3s1-.4 1-1h1.7c-.1 1.6-1 2.6-2.7 2.6z" />
    </svg>
  ),
  CodeChef: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9c1-1.3 2.4-2 4-2s3 .7 4 2M8 15c1 1.3 2.4 2 4 2s3-.7 4-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 4.5h21a1 1 0 011 1v13a1 1 0 01-1 1h-21a1 1 0 01-1-1v-13a1 1 0 011-1zm1.98 1.5L12 12.5l8.52-6.5H3.48zM21.5 7.4l-9.03 6.88a1 1 0 01-1.14 0L2.5 7.4V18.5h19V7.4z" />
    </svg>
  ),
};

const SocialIcons = ({ links = [], size = "md" }) => {
  const dim = size === "sm" ? "w-9 h-9" : "w-11 h-11";
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const isEmail = link.platform === "Email";
        return (
          <a
            key={link._id || link.platform}
            href={link.url}
            target={isEmail ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.platform}
            className={`${dim} rounded-full border border-border bg-card flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-colors`}
          >
            {ICONS[link.platform] || <span className="text-xs">{link.platform?.[0]}</span>}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
