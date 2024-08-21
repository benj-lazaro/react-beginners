import { useState } from "react";

function App() {
  // State hooks
  // State values are stored in memory as an array [false, true]
  // React is NOT aware of the name(s) of state variable(s)
  // React relies on the order of the State Hook(s) to properly assign/map array value(s)
  //  to the corresponding State Variable(s) 
  //  e.g. isVisible = false; isApproved = true
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);

  // Event handler
  const handleClick = () => {
    setVisibility(true);
    console.log(isVisible); // Retuns the previous value (false) instead of the current
    
    setApproved(false);
    console.log(isApproved);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
