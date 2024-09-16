import { useState } from "react";

function App() {
  // State hook
  const [customer, setCustomer] = useState({
    name: "John Wick",
    address: {
      city: "San Francisco",
      zipCode: 12345,
    },
  });

  // Event handler
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94222 },
    });
  };

  return (
    <div>
      <p>Name: {customer.name}</p>

      <p>
        Address: {customer.address.city}, {customer.address.zipCode}
      </p>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Export the React App component
export default App;
