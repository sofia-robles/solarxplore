// const apiKey = 'qanT1ugOgF6T6gDeRO881G8tKMTbvWl1ldGWkAed';
// const apiUrl = 'https://api.nasa.gov/planetary/apod';
// import React from 'react';
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// alert("hi");

// export default defineConfig({
//   plugins: [react()],
// });


// const divClass = document.querySelector('.api-data'); 

// document.getElementById('fetchData').addEventListener('click', async () => {
//     try {
//         const response = await fetch(`${apiUrl}?api_key=${apiKey}`); 

//         if (!response.ok) throw new Error('Failed to fetch data');
//         const data = await response.json();

        
//         document.getElementById('result').textContent = data.explanation || 'No explanation available';
//     } catch (error) {
//         console.error(error);
//         document.getElementById('result').textContent = 'Error fetching data';
//     }
// });





// planets.forEach((planet, index) => {
//   const animationDuration = 5 + index * 2; 
//   planetElement.style.animation = `orbit ${animationDuration}s infinite linear`;
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const planets = document.querySelectorAll(".planet");

//   planets.forEach((planet) => {
//     const info = document.querySelector(`#${planet.id}-info`);

//     planet.addEventListener("mouseover", () => {
//       if (info) info.style.display = "block";
//     });

//     planet.addEventListener("mouseout", () => {
//       if (info) info.style.display = "none";
//     });
//   });

//   function resizePlanets() {
//     const scaleFactor = window.innerWidth / 1920; 
//     planets.forEach((planet) => {
//       planet.style.transform = `scale(${scaleFactor})`;
//     });
//   }

  
//   window.addEventListener("resize", resizePlanets);
//   resizePlanets();

// });
  
