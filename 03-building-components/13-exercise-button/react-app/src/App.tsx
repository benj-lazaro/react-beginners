import Button from "./components/Button";

// Event handler
const onSelectButton = () => console.log("Clicked");

function App() {
  return (
    <div>
      <Button color="primary" onClick={onSelectButton}>
        Primary
      </Button>
      <Button color="secondary" onClick={onSelectButton}>
        Secondary
      </Button>
      <Button color="success" onClick={onSelectButton}>
        Success
      </Button>
      <Button onClick={onSelectButton}>No Color</Button>
    </div>
  );
}

// Export the React App component
export default App;
