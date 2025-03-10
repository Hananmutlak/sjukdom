// map.js
import L from 'leaflet';

export function initMap() {
  const map = L.map('map').setView([51.505, -0.09], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  // دمج مع API البيانات الوبائية
  fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        L.marker([country.countryInfo.lat, country.countryInfo.long])
          .bindPopup(`<b>${country.country}</b><br>Cases: ${country.cases}`)
          .addTo(map);
      });
    });
}