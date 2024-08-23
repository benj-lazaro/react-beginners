import { useState } from "react";

function App() {
  // State Hook of an array
  const [tags, setTags] = useState(["happy ", "cheerful "]);

  // Event handler
  const handleClick = () => {
    // Add an element to the array
    setTags([...tags, "exciting "]);

    // Remove an element from the array
    setTags(tags.filter((tag) => tag !== "happy "));

    // Update an element in the array
    setTags(tags.map((tag) => (tag === "happy " ? "happiness " : tag)));
  };

  return (
    <div>
      {tags}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
