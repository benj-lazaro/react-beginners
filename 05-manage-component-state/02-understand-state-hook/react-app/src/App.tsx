import { useState } from "react";

function App() {
  // State hook variables isVisible & isApproved
  // are stored outside of this component as elements of an array in memory
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);

  // Local variable, get re-initialized everytime this component is re-rendered
  let count = 0;

  // Event handler
  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible); // Displays the previous state value
  };

  // State variables are updated ALL at once after the exeuction of the Event handler

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

// Export the React App component
export default App;
