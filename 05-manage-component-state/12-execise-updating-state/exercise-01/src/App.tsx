import { useState } from "react";
function App() {
  // State Hook
  const [game, setGame] = useState({
    id: 1,
    player: {
      name:"John Constantine"
    }
  });
  
  // Event handler
  const clickHandler = () => {
    setGame({...game, player: {...game.player, name:"John Wick"}});
  };

  return (
    <div>
      { game.player.name} <span> </span>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
