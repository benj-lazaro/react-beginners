import { useState } from "react";

function App() {
  // State hook
  const [tags, setTags] = useState(["happy ", "cheerful "]);

  // Event handler
  const handleClick = () => {
    // Add new item in the array
    // setTags([...tags, "exciting "]);

    // Remove an item from the array
    // setTags(tags.filter((tag) => tag !== "happy "));

    // Update an item in the array
    setTags(tags.map((tag) => (tag === "happy " ? "happiness " : tag)));
  };

  return (
    <div>
      <p>{tags}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Export the React App component
export default App;
