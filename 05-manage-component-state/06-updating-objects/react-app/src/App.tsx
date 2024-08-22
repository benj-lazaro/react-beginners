import { useState } from "react";


function App() {
  // State Hook
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5
  });

  const handleClick = () => {
    setDrink({...drink, price: 6});
  };
  
  return (
    <div>
      <button onClick={ handleClick }>Click Me</button>
      {drink.price}
    </div>
  );
}

export default App;
