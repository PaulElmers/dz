function Family({ children }) {
    return <div>{children}</div>;
  }
  
  function Member({ name }) {
    return <p>Член сім'ї: {name}</p>;
  }
  export default Family;