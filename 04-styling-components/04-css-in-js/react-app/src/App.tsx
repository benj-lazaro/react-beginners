import ListGroup from "./components/ListGroup";
import "./App.css";

let items = ["New York", "Los Angeles", "San Francisco"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
