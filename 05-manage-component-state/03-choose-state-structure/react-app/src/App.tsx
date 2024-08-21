import { useState } from "react";

function App() {
  // State hooks for user information stored in an object
  const [person, setPerson] = useState({
    firstName:"Mosh",
    lastName: "Hamedani"
  });
  
  // State Hook for page spinner while waiting requested data from a remote server
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      { person.firstName } { person.lastName}
    </div>
  );
}

export default App;
