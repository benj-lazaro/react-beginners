import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Default
      </Button>
      <Button
        color="primary"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Primary
      </Button>
      <Button
        color="secondary"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Secondary
      </Button>{" "}
    </div>
  );
}

export default App;
