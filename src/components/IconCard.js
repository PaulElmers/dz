function IconCard({ icon, title, children }) {
    return (
      <div style={{ border: '1px solid gray', padding: '16px' }}>
        <img src={icon} alt={title} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
  export default IconCard;