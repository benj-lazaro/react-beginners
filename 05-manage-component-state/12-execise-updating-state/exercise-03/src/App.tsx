import { useState } from "react";

function App() {
  // State Hook
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: "Product One", quantity: 1},
      {id: 2, title: "Product Two", quantity: 1},
    ]
  });
  
  // Event handler
  const clickHandler = () => {
    setCart({...cart, items: cart.items.map((item) => item.id === 1 ? {...item, quantity: item.quantity + 1} : item )})
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      { cart.items.map((item) => <li key={item.id}>{item.title}, Quatity: {item.quantity}</li>) }
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
