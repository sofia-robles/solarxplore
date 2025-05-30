import React, { useState, useEffect } from "react";
import "./App.css";

const apiKey = "uymrK271gvIVrNRyQOmwCNDCt58WEdCS6YlqRyJY";
const apiUrl = "https://api.nasa.gov/planetary/apod";

function App() {

  const [nasaData, setNasaData] = useState({ url: "", explanation: "", title: "" });
  const [hoveredPlanet, setHoveredPlanet] = useState(null);



  const planets = [
    { id: "Sun", name: "Sun", img: "/images/planets/sun.png", info: "The Sun is a massive, glowing ball of hot plasma at the center of the Solar System. It provides light and heat, sustaining life on Earth. Composed mainly of hydrogen and helium, it generates energy through nuclear fusion in its core." },
    { id: "Mercury", name: "Mercury", img: "/images/planets/mercury.png", info: "Mercury is the smallest planet and closest to the Sun. It has a rocky surface, no atmosphere to retain heat, and extreme temperature swings between day and night." },
    { id: "Venus", name: "Venus", img: "/images/planets/venus.png", info: "Venus is similar in size to Earth but has a thick atmosphere of carbon dioxide, trapping heat and making it the hottest planet. Its surface is covered with volcanoes and toxic clouds of sulfuric acid." },
    { id: "Earth", name: "Earth", img: "/images/planets/earth.png", info: "Earth is the only planet known to support life, making it our home! It has a breathable atmosphere, liquid water, and a protective magnetic field to sustain life, as well as a diverse climate and surface." },
    { id: "Mars", name: "Mars", img: "/images/planets/mars.png", info: "Mars, the 'Red Planet', is known for its iron-rich soil giving it a reddish appearance. It has a thin atmosphere, freezing temperatures, and is being explored for its potential for past or present life." },
    { id: "Jupiter", name: "Jupiter", img: "/images/planets/jupiter.png", info: "Jupiter is the largest planet, a gas giant primarily made of hydrogen and helium. It has a Great Red Spot, which is actually a massive storm, and dozens of moons." },
    { id: "Saturn", name: "Saturn", img: "/images/planets/saturn.png", info: "Saturn is a gas giant known for its stunning ring system made of ice and rock. It is mostly hydrogen and helium and has over 80 moons." },
    { id: "Uranus", name: "Uranus", img: "/images/planets/uranus.png", info: "Uranus is an ice giant with a pale blue-green color due to methane in its atmosphere. It rotates on its side, making its axial tilt the most extreme in the solar system." },
    { id: "Neptune", name: "Neptune", img: "/images/planets/neptune.png", info: "Neptune is an ice giant with deep blue hues and the strongest winds in the solar system. It has a faint ring system and a giant storm called the Great Dark Spot." },
  ];


  useEffect(() => {

    const homeSection = document.getElementById("Home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    fetch(`${apiUrl}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setNasaData({
          url: data.url || "",
          explanation: data.explanation || "No explanation available.",
          title: data.title || "NASA Astronomy Picture of the Day",
        });
      });

      const starContainer = document.getElementById("stars");


    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starContainer.appendChild(star);
    }


    for (let i = 0; i < 2; i++) {
      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shooting-star");
      shootingStar.style.top = `${Math.random() * 100}vh`;
      shootingStar.style.left = `${Math.random() * 100}vw`;
      shootingStar.style.animationDuration = `${Math.random() * 2 + 2}s`;
      shootingStar.style.animationDelay = `${Math.random() * 2}s`;
      starContainer.appendChild(shootingStar);
    }

  }, []);




  return (
    <div className="App">

      <section id="Home"></section>
      <header>
        <div id="logo">
          <img src="/images/solarxplore.jpg" alt="Logo" className="Logo" />
        </div>
        <nav>
          <a href="#Home">Home</a>
          <a href="#Info">Info</a>
          <a href="#Photo">Photo</a>
          <a href="#Subscribe">Subscribe</a>
        </nav>
      </header>

    <div>
      <div id="stars"></div>
    </div>


      <main>
        <section id="explore">
          <h1 className="explore-text">EXPLORE</h1>
          <a href="#planets" className="arrow-link">
            <div className="arrow-bounce">⬇</div>
          </a>
        </section>

        <section id="planets" className="space">
          {planets.map((planet) => (
            <div
              key={planet.id}
              className="planet-container"
              id={planet.id}
              onMouseEnter={() => setHoveredPlanet(planet)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <img src={planet.img} alt={planet.name} />
              {hoveredPlanet?.id === planet.id && (
                <div className="planet-info">
                  <h2>{hoveredPlanet.name}</h2>
                  <p>{hoveredPlanet.info}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="Info"></section>
        <section id="Solar-info">
          <h1>The Solar System</h1>
          <p>
            The solar system consists of the Sun, eight planets, their moons, and various smaller objects like dwarf planets, asteroids, and comets. At its center, the Sun provides the gravitational force that holds everything in orbit and the energy that drives life on Earth. The planets are divided into two groups: the rocky terrestrial planets (Mercury, Venus, Earth, and Mars) and the gas and ice giants (Jupiter, Saturn, Uranus, and Neptune). Beyond Neptune lies the Kuiper Belt, home to icy bodies like Pluto. The solar system formed about 4.6 billion years ago from a collapsing cloud of gas and dust.
          </p>
        </section>




        <section id="Photo"></section>
        <section id="day-photo">
          <h1>NASA's Astronomy Picture of the Day</h1>
          <h2>{nasaData.title}</h2>
          {nasaData.url && <img src={nasaData.url} alt={nasaData.title} id="nasa-image" />}
          {nasaData.explanation && <p id="nasa-description">{nasaData.explanation}</p>}
        </section>

        <section id="Subscribe"></section>
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
          <p>Copyright &copy; 2024</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
