function UserCard({ username, email, children }) {
    return (
      <div style={{ border: '1px solid gray', padding: '16px' }}>
        <h2>{username}</h2>
        <p>{email}</p>
        <div>{children}</div>
      </div>
    );
  }
  export default UserCard;