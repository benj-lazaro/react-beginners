import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App() {
  // State Hook
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
 
  // Event handler

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </div>
  );
}

export default App;
