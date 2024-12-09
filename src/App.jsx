
import './App.css'
const apiKey = 'qanT1ugOgF6T6gDeRO881G8tKMTbvWl1ldGWkAed';
const apiUrl = 'https://api.nasa.gov/planetary/apod';
import React from 'react';
import React, { useState } from "react";


function App() {


const planets = [
  { id: "Sun", name: "Sun", info: "The center of our solar system", size: "15vw" },
  { id: "Mercury", name: "Mercury", info: "The smallest planet", size: "4vw" },
  { id: "Venus", name: "Venus", info: "The hottest planet", size: "5vw" },
  { id: "Earth", name: "Earth", info: "Our home planet", size: "6vw" },
  { id: "Mars", name: "Mars", info: "The red planet", size: "5vw" },
  { id: "Jupiter", name: "Jupiter", info: "The largest planet", size: "12vw" },
  { id: "Saturn", name: "Saturn", info: "Famous for its rings", size: "10vw" },
  { id: "Uranus", name: "Uranus", info: "An ice giant", size: "8vw" },
  { id: "Neptune", name: "Neptune", info: "The furthest planet", size: "8vw" },
];

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="space">
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="planet"
          style={{ width: planet.size }}
          onMouseEnter={() => setHoveredPlanet(planet.id)}
          onMouseLeave={() => setHoveredPlanet(null)}
        >
          <img
            src={`images/${planet.id.toLowerCase()}.png`}
            alt={planet.name}
          />
          {hoveredPlanet === planet.id && (
            <div className="planet-info">{planet.info}</div>
          )}
        </div>
      ))}
    </div>
  );
};




const divClass = document.querySelector('.api-data'); 

document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}`); 

        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        
        document.getElementById('result').textContent = data.explanation || 'No explanation available';
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Error fetching data';
    }
});




document.addEventListener("DOMContentLoaded", () => {
  const planets = document.querySelectorAll(".planet");

  planets.forEach((planet) => {
    const info = document.querySelector(`#${planet.id}-info`);

    planet.addEventListener("mouseover", () => {
      if (info) info.style.display = "block";
    });

    planet.addEventListener("mouseout", () => {
      if (info) info.style.display = "none";
    });
  });

  function resizePlanets() {
    const scaleFactor = window.innerWidth / 1920; 
    planets.forEach((planet) => {
      planet.style.transform = `scale(${scaleFactor})`;
    });
  }

  
  window.addEventListener("resize", resizePlanets);
  resizePlanets();

});
}
  

export default App;

