import { useState } from "react";

// Component interface
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Deconstruct the returned array from useState()
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Fragment implementation
    <>
      <h1>{heading}</h1>

      {/* Conditional rendering using a Logical AND operator */}
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {/* Renders <li> element for each item in the array */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// Export the function as a default object from this module (i.e. component)
export default ListGroup;
