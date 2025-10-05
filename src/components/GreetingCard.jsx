function GreetingCard({ name, onDelete }) {
  return (
    <div className="card">
      <h2>Hello, {name}! 👋</h2>
      <p>Hope you’re having an amazing day!</p>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default GreetingCard;
