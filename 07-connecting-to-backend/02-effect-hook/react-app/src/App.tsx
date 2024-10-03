import React, { useEffect, useRef } from "react";

const App = () => {
  // Reference hook
  const ref = useRef<HTMLInputElement>(null);

  // Effect hook = executed in order
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "MyApp";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
