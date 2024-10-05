import React, { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App = () => {
  // Effect hook
  useEffect(() => {
    connect();

    // Clean up
    return () => disconnect();
  });

  return <div></div>;
};

export default App;
