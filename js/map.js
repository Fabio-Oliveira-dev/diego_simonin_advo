const map = L.map('map').setView([-22.75909277382661, -43.455667596062554], 16);

const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

layer.addTo(map);

const marker = L.marker([-22.75909277382661, -43.455667596062554]);

marker.addTo(map);

marker.bindPopup("<b>Escritório</b><br>Vagner Gomes Cruz").openPopup();