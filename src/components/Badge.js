function Badge({ count, children }) {
    return (
      <div style={{ position: 'relative' }}>
        {children}
        <span style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'red', borderRadius: '50%', padding: '4px', color: 'white' }}>{count}</span>
      </div>
    );
  }
  export default Badge;