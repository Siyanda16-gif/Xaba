// Leaflet Map

// Coordinates for 82 Diakonia Avenue, Durban, South Africa
const addressCoords = [-29.8579, 31.0216];

// Create the map and set its view to the address coordinates
const map = L.map('map').setView(addressCoords, 15);

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add a marker at the address
L.marker(addressCoords).addTo(map)
  .bindPopup('82 Diakonia Avenue, Durban')
  .openPopup();
 'use strict';

// Function to type out text
function typeText(element, texts, index = 0, textIndex = 0) {
    if (index < texts.length) {
        const text = texts[index];
        if (textIndex < text.length) {
            element.textContent += text.charAt(textIndex);
            textIndex++;
            setTimeout(() => typeText(element, texts, index, textIndex), 100);
        } else {
            setTimeout(() => {
                element.textContent = ''; // Clear the text
                typeText(element, texts, index + 1); // Move to the next text
            }, 2000); // Wait before clearing the text
        }
    }
}

// Start typing effect
const typingElement = document.getElementById('typing-text');
const sentences = [
  "I am a Junior Full Stack Developer.",
    "I am a software developer.",
    "I am a web developer.",
    "I am proficient with Azure.",
    "I am a Database Administrator."
];

typeText(typingElement, sentences);
