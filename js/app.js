
//map on footer
var map = L.map("my-map").setView([50.06192, 36.81931], 10);


var myAPIKey = "48d971a03f424e63b8b9ccc21eeca7ba";


var isRetina = L.Browser.retina;

var baseUrl =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
var retinaUrl =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";


L.tileLayer(isRetina ? retinaUrl : baseUrl, {


  apiKey: myAPIKey,
  maxZoom: 20,
  id: "osm-bright",
}).addTo(map);
//marker on map in footer
const markerIcon = L.icon({
  iconUrl: "/img/geo-alt-fill.svg",
  iconSize: [31, 46],
  iconAnchor: [15.5, 42],
  popupAnchor: [0, -45]
});
const zooMarkerPopup = L.popup().setContent("The best beach in the world is waiting for you!");
const zooMarker = L.marker([50.06192, 36.81931], {
  icon: markerIcon
}).bindPopup(zooMarkerPopup).addTo(map);





