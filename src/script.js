const apiKey = 'qanT1ugOgF6T6gDeRO881G8tKMTbvWl1ldGWkAed'
const apiUrl = 'https://api.nasa.gov/planetary/apod'
const divClass = document.querySelector('api-data');

document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Error fetching data';
    }
});


// image file for logo
const header = document.querySelector('header');

const img = document.createElement('img');
img.src = 'images/solarxplore.jpg';
img.alt = 'Solarxplore Logo';
document.header.appendChild(img);
//accessable by css
img.classList.add('logo-img');

