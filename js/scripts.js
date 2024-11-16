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