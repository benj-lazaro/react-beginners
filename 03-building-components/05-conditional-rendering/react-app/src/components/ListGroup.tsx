function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    // Fragment implementation
    <>
      <h1>List</h1>

      {/* Conditional rendering using a Logical AND operator */}
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

// Export the function as a default object from this module (i.e. component)
export default ListGroup;
