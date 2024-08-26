import { useState } from "react";

function App() {
  // State Hook
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"]
  });
  
  // Event handler
  const clickHandler = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, "Cheese"]});
  };

  return (
    <div>
      {pizza.name} <br /> {pizza.toppings} <br />
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
