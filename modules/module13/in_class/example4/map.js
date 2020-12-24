var myMap = L.map("map", {
    center: [41.1400, -104.8202],
    zoom: 4
<<<<<<< HEAD
#    center: [61.2686, -149.4815],
    #    zoom: 9
    });
=======
  });
>>>>>>> Devin

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
}).addTo(myMap);

var cities = [{
    location: [38.2975, -122.2869],
    name: "Napa",
    city_info: "Devin lives here"
},
{
    location: [41.8781, -87.6298],
    name: "Chicago",
    city_info: "Kelli lives here"
},
{
    location: [47.6062, -122.3321],
    name: "Seattle",
    city_info: "Shanu lives here"
},
{
    location: [37.7749, -122.4194],
    name: "San Francisco",
    city_info: "Hirdeyjot lives here"
},
{
    location: [41.1400, -104.8202],
    name: "Cheyenne",
    city_info: "this is the center of this map"
}
];

cities.forEach(city => L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <b></b> <h3>${city.city_info}</h3> <p>Hello</p>`)
    .addTo(myMap));
var stores = [{
    location: [61.130249, -149.883896],
    name: "100th & C St - Anchorage",
    store_type: "Company Owned"
},
{
    location: [61.145080, -149.862800],
    name: "Old Seward & Diamond",
    store_type: "Company Owned"
}
];

stores.forEach(store => L.marker(store.location)
    .bindPopup(`<h1>${store.name}</h1> <b></b> <h3>${store.store_type}</h3> <p>Hello</p>`)
];

cities.forEach(city=> L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <b></b> <h3>${city.city_info}</h3> <p>Hello</p>`)
    .addTo(myMap));
