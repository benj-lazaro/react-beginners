import { useState } from "react";

function App() {
  // State hook
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  // Event handler
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Export the React App component
export default App;
