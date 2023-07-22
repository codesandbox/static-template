let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker as reference (blue point)
let marker = L.marker([51.5, -0.09]).addTo(map);

//Marker as Circle
var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f028",
  fillOpacity: 0.3,
  radius: 600
}).addTo(map);

//Add a Polygon
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
  [51.52, -0.07]
]).addTo(map);

//Add emergency windows
marker.bindPopup("<b>Estoy aqui!</b><br>Esta es mi casa");
circle.bindPopup("Area por donde pasa PlatziSat1").openPopup();
polygon.bindPopup("Area Geográfica donde se encuentra mi Estacion Terrestre.");

//Window Emergent marker-off
var popup = L.popup()
  .setLatLng([51.513, -0.09])
  .setContent("Pop-Up sin marcador")
  .openOn(map);

//Events
/* function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick); */

//Event with a Pop-up in Screen
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Location: " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
