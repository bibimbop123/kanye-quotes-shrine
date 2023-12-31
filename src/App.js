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
    <div className="justify-center w-full App">
      <br />
      <header className="text-center">
        <h1 className="text-6xl font-bold mb-4">Kanye Says</h1>
      </header>
      <div className="video-container justify-center flex mx-auto">
        <video src={Kobe} autoPlay controls />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mt-8">...and I quote:</h2>
        <h3 className="text-xl font-bold">👇</h3>
        <p className="text-4xl font-bold quote">{quote}</p>
        <button
          className="bg-secondary text-primary px-4 py-2 rounded mt-4 bg-red-500"
          onClick={fetchQuote}
        >
          Get new quote
        </button>
      </div>
    </div>
  );
}

export default App;
