const apiKey = 'qanT1ugOgF6T6gDeRO881G8tKMTbvWl1ldGWkAed';
const apiUrl = 'https://api.nasa.gov/planetary/apod';
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




document.querySelectorAll('.planet').forEach((planet) => {
    planet.addEventListener('mouseover', () => {
      planet.style.transform = 'scale(1.2)';
    });
  
    planet.addEventListener('mouseout', () => {
      planet.style.transform = 'scale(1)';
    });
});

planets.forEach((planet, index) => {
  const animationDuration = 5 + index * 2; 
  planetElement.style.animation = `orbit ${animationDuration}s infinite linear`;
});
