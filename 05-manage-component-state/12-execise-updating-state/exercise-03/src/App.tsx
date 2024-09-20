import { useState } from "react";

function App() {
  // State hook
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  // Event handler
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <p>Cart</p>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} = Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Export the React App component
export default App;
