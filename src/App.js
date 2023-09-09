import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{quote}</p>
      </header>
      <button onClick={() => window.location.reload()}>Get new quote</button>
    </div>
  );
}

export default App;
