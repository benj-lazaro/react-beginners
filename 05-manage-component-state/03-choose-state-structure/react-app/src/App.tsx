import { useState } from "react";

function App() {
  // State hook on username
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Wick",
  });

  // State hook on page loading
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      {person.firstName} {person.lastName}
    </div>
  );
}

// Export the React App component
export default App;
