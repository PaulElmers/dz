function ProductCard({ title, price, description }) {
    return (
      <div style={{ border: '1px solid gray', padding: '16px' }}>
        <h2>{title}</h2>
        <p>Ціна: {price} грн</p>
        <p>{description}</p>
      </div>
    );
  }
  export default ProductCard;