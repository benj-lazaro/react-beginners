import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // Fragment implementation
    <>
      <h1>List</h1>

      {/* Conditional rendering using a Logical AND operator */}
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {/* Renders <li> element for each item in the array */}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// Export the function as a default object from this module (i.e. component)
export default ListGroup;
