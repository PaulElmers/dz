function Avatar({ imageUrl, alt }) {
    return <img src={imageUrl} alt={alt} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />;
  }
  export default Avatar;