function ThemedContainer({ theme, children }) {
    const styles = theme === 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' };
    return <div style={styles}>{children}</div>;
  }
  export default ThemedContainer;