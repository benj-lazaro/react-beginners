function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    // Fragment implementation
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Dynamically renders array items as an unordered list */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

// Export the function as a default object from this module (i.e. component)
export default ListGroup;
