function IconButton({ icon, onClick }) {
    return <button onClick={onClick}><img src={icon} alt="icon" /></button>;
  }
  export default IconButton;