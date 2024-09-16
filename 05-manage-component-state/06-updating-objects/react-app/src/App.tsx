import { useState } from "react";

function App() {
  // State hook
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  // Event handler
  const handleClick = () => {
    setDrink({ ...drink, price: 6 }); // New state object with updated value of targeted property
  };

  return (
    <div>
      <p>
        {drink.title} Price: {drink.price}
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Export the React App component
export default App;
