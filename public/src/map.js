let mapOptions = {
    center: [29.17384, 116.27890],
    zoom: 10
}
let map = new L.map('mapid', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png');

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(geoFeaturePoints, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);


/* var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [10, 10],
        iconAnchor: [22, 94]
    }
});

var mallard = new LeafIcon({ iconUrl: 'img/mallard.png' });

// custom duck marker
L.geoJSON(geoFeaturePoints, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: mallard });
    }
}).addTo(map);

 */
// L.geoJSON(geoFeaturePoints).addTo(map);
//  L.geoJSON(geoFeatureLines).addTo(map);
map.addLayer(layer);