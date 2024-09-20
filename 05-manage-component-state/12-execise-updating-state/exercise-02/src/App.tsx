import { useState } from "react";

function App() {
  // State hook
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  // Event handler
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Pepperoni"] });
  };

  return (
    <div>
      <p>{pizza.name}</p>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Export the React App component
export default App;
