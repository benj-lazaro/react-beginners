import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // State hook for the visibility of the <Alert /> component
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* Use && operator to render <Alert /> component conditionally */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My <strong>Alert</strong>!
        </Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Primary
      </Button>
    </div>
  );
}

// Export the React App component
export default App;
