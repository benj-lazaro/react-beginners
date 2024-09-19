import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  // State hook
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // Event handler
  const handleClick = () => {};

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </div>
  );
}

// Export the React App component
export default App;
