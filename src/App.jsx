import React, { useState, useEffect } from "react";
import "./App.css";


const apiKey = 'uymrK271gvIVrNRyQOmwCNDCt58WEdCS6YlqRyJY';
const apiUrl = "https://api.nasa.gov/planetary/apod";

function App() {
  const [nasaData, setNasaData] = useState({ url: "", explanation: "" });


  useEffect(() => {
    fetch(`${apiUrl}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setNasaData({
          url: data.url || "",
          explanation: data.explanation || "No explanation available.",
        });
      });
  }, []);


  if (!nasaData.url) {
    return null; 
  }

  return (
    <div className="App">
      <header>
        <h1>NASA Astronomy Picture of the Day</h1>
      </header>

      <div id="day-photo">
        <h2>Today's Astronomy Picture</h2>
        <img src={nasaData.url} alt="NASA Astronomy Picture of the Day" id="nasa-image" />
        <p id="nasa-description">{nasaData.explanation}</p>
      </div>
    </div>
  );
}

export default App;
