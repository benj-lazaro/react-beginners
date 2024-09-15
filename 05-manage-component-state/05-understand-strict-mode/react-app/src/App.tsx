import Message from "./Message";

function App() {
  return (
    <div>
      {/* Strict mode renders the each call to the <Message /> component twice */}
      <Message />
      {/* <Message />
      <Message /> */}
    </div>
  );
}

// Export the React App component
export default App;
