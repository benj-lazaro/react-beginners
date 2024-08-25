import { useState } from "react";
import { produce } from "immer";

function App() {
  // State Hook for the array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // Event handler
  // Use Immer to handle the update state of the targeted object element in the array
  const handleClick = () => {
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1)
      if (bug) bug.fixed = true;
    }));
  };

  return (
    <div>
      { bugs.map(bug => <p key={bug.id}> {bug.title} {bug.fixed ? "Fixed" : "New"} </p>) }
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
