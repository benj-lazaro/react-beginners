import { useState } from "react";


function App() {
  // State Hook of a nested object
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111
    }
  });

  // Event handler to update the property zipCode
  const handleClick = () => {
    setCustomer({...customer, address: {...customer.address, zipCode: 94222}})
  };
  
  return (
    <div>
      {customer.name} <br />
      {customer.address.city} <br />
      {customer.address.zipCode} <br />
      <button onClick={ handleClick }>Click Me</button>
      
    </div>
  );
}

export default App;
