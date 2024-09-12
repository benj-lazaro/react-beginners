import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked!")} />
    </div>
  );
}

// Export the React App component
export default App;
