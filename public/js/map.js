document.addEventListener('DOMContentLoaded', function() {
  console.log("El mapa cargó bien!!!");

  //Inicializando el mapa
  const map = L.map('map').setView([20, 0], 2); //Vista global (latitud, longitud, zoom)

  //Agregando capa del mapa base (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  //Data de ejemplo de eventos de floración
  const floweringEvents = [
    {
      name: "Sakura in Japan",
      lat: 35.6895,
      lng: 139.6917,
      date: "March - April",
      type: "Cherry Blossom",
      description: "The iconic spring bloom across Japan."
    },
    {
      name: "Super Bloom in California",
      lat: 34.0522,
      lng: -118.2437,
      date: "February - March",
      type: "Desert Wildflower",
      description: "Rare mass blooming after heavy rains."
    },
    {
      name: "Tulip Fields in the Netherlands",
      lat: 52.1326,
      lng: 4.3197,
      date: "April - May",
      type: "Tulip",
      description: "Vast colorful fields attracting tourists worldwide."
    },
    {
      name: "Lavender Blooms in Provence",
      lat: 43.8782,
      lng: 5.6667,
      date: "June - July",
      type: "Lavender",
      description: "Famous purple fields that draw tourists and beekeepers alike during peak season."
    },
    {
      name: "Wildflowers in the Atacama Desert",
      lat: -23.6345,
      lng: -68.8853,
      date: "September - October",
      type: "Desert Flower",
      description: "Unexpected blooms triggered by rare El Niño rains in one of Earth's driest places."
    }
  ];

  //Añadiendo marcadores
  floweringEvents.forEach(event => {
    const marker = L.marker([event.lat, event.lng]).addTo(map);
    //Para los popups
    marker.bindPopup(`
      <strong>${event.name}</strong><br>
      <em>${event.type} • ${event.date}</em><br>
      <p>${event.description}</p>
      <button onclick="showDetails('${encodeURIComponent(event.name)}')">View Details</button>
    `);
  });

  window.showDetails = function(name) {
    alert(`Details for: ${decodeURIComponent(name)}`);
  };
});