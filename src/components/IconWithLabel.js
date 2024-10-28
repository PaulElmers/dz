function IconWithLabel({ icon, label }) {
    return (
      <div>
        <img src={icon} alt={label} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
        {label}
      </div>
    );
  }
  export default IconWithLabel;