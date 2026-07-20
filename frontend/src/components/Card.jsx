const Card = ({ children, className = "", hover = true, as: Tag = "div", ...props }) => (
  <Tag
    className={`bg-card border border-border rounded-xl2 shadow-card ${
      hover ? "transition-all duration-300 hover:shadow-hover hover:-translate-y-1" : ""
    } ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

export default Card;
