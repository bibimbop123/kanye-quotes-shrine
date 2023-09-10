import React, { useState, useEffect } from "react";
import Kobe from "./assets/Kobe.mp4";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanye Says</h1>
        <video src={Kobe} autoPlay controls />
        <h2>...and I quote:</h2>
        <h3>👇</h3>
        <p>{quote}</p>
      </header>
      <button onClick={fetchQuote}>Get new quote</button>
    </div>
  );
}

export default App;
