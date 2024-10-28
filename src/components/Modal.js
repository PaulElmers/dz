function Modal({ isOpen, children }) {
    return isOpen ? <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px' }}>{children}</div> : null;
  }
  export default Modal;