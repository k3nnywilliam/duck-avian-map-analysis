

let mapOptions = {
    center: [29.17384, 116.27890],
    zoom: 10
}
let map = new L.map('mapid', mapOptions);
let layer = new L.TileLayer(`https://api.mapbox.com/styles/v1/kennyallau/ckuoxocix5u8s17nsv1gpudg6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VubnlhbGxhdSIsImEiOiJja3VveHd3Z3UwMmMxMm9xdm1uMWhlaGlwIn0.5IWi1IBZe3-ypfrW-0jivA`);


let LeafIcon = L.Icon.extend({
    options: {
        iconSize: [30, 30],
       /*  shadowAnchor: [0, 0],
        iconAnchor: [0, 0] */
    }
});

let mallard = new LeafIcon({ iconUrl: 'src/img/mallard-duck2.png' });
let muscovy = new LeafIcon({ iconUrl: 'src/img/muscovy2.png' });


var linestyle = {
    color: 'red',
    weight: 5,
    opacity: 0.6
     }, 
    stroke = {
    color: "#fff",
    weight: 7,
    opacity: 0.4
    };

L.geoJSON(geoFeaturesLines, {
    style: linestyle
}).addTo(map);


// custom duck marker
L.geoJSON(geoFeaturePoints, {
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.individual) {
            case 'Anas platyrhynchos': return L.marker(latlng, { icon: mallard });
            case 'Cairina moschata':   return L.marker(latlng, { icon: muscovy });
        }
    }
}).addTo(map);


map.addLayer(layer);

//map.fitBounds(polyline.getBounds());