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

  const planets = [
    { id: "Sun", name: "Sun", img: "images/planets/sun.png", info: "Info about the Sun" },
    { id: "Mercury", name: "Mercury", img: "images/planets/mercury.png", info: "Info about Mercury" },
    { id: "Venus", name: "Venus", img: "images/planets/venus.png", info: "Info about Venus" },
    { id: "Earth", name: "Earth", img: "images/planets/earth.png", info: "Info about Earth" },
    { id: "Mars", name: "Mars", img: "images/planets/mars.png", info: "Info about Mars" },
    { id: "Jupiter", name: "Jupiter", img: "images/planets/jupiter.png", info: "Info about Jupiter" },
    { id: "Saturn", name: "Saturn", img: "images/planets/saturn.png", info: "Info about Saturn" },
    { id: "Uranus", name: "Uranus", img: "images/planets/uranus.png", info: "Info about Uranus" },
    { id: "Neptune", name: "Neptune", img: "images/planets/neptune.png", info: "Info about Neptune" },
  ];

  if (!nasaData.url) {
    return null; 
  }

  return (
    <div className="App">
      <header>
        <nav id="links">
          <a href="#Home">Home</a>
          <a href="#Info">Info</a>
          <a href="#Photo">Photo</a>
          <a href="#Subscribe">Subscribe</a>
        </nav>
      </header>

      <main>
      <section id="Home"></section>


      <section id="planets">
          <div className="space">
            {planets.map((planet) => (
              <div key={planet.id} id={planet.id} className="planet-container">
                <img src={planet.img} alt={planet.name} className="planet" />
                <div className="planet-info">
                  <h2>{planet.name}</h2>
                  <p>{planet.info}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="Info">
          <div id="solar-info">
            <h1>Solar System</h1>
            <p>Info about the solar system</p>
          </div>
        </section>

        <section id="Photo">
          <div id="day-photo">
            <h1>NASA's Astronomy Picture of the Day</h1>
            {nasaData.url && <img src={nasaData.url} alt="NASA Astronomy Picture of the Day" id="nasa-image" />}
            <p id="nasa-description">{nasaData.explanation}</p>
          </div>
        </section>


        <section id="Subscribe">
          <footer>
            <div id="subs">
              <h1>Subscribe</h1>
            </div>
            <form>
              <fieldset>
                <legend>Personal Information</legend>
                <label>
                  Name
                  <input type="text" name="name" />
                </label>
                <label>
                  Email
                  <input type="text" name="email" />
                </label>
              </fieldset>
              <fieldset>
                <legend>Frequency</legend>
                <select name="frequency" id="frequency">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </fieldset>
              <button type="submit">Subscribe/Submit</button>
            </form>
          </footer>
        </section>
      </main>
    </div>
  );
}



export default App;
