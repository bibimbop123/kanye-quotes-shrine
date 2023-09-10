import React, { useState, useEffect } from "react";
import "./index.css"; // import your CSS file here
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
      <br />
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">Kanye Says</h1>
        <div className="video-container">
          <video src={Kobe} autoPlay controls />
        </div>
        <h2 className="text-2xl font-bold mt-8">...and I quote:</h2>
        <h3 className="text-xl font-bold">👇</h3>
        <p className="quote">{quote}</p>
        <button
          className="bg-secondary text-primary px-4 py-2 rounded mt-4"
          onClick={fetchQuote}
        >
          Get new quote
        </button>
      </header>
    </div>
  );
}

export default App;
