

let mapOptions = {
    center: [29.17384, 116.27890],
    zoom: 10
}
let map = new L.map('mapid', mapOptions);
let layer = new L.TileLayer(`https://api.mapbox.com/styles/v1/kennyallau/ckuoxocix5u8s17nsv1gpudg6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VubnlhbGxhdSIsImEiOiJja3VveHd3Z3UwMmMxMm9xdm1uMWhlaGlwIn0.5IWi1IBZe3-ypfrW-0jivA`);

/* var geojsonMarkerOptions = {
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
}).addTo(map); */

/* 
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = 'src/img/mallard.png';
        img.style.width = '200px';

        return img;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(map); */


var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [20, 20],
        iconAnchor: [22, 94]
    }
});

var mallard = new LeafIcon({ iconUrl: 'src/img/mallard-duck.png' });

// custom duck marker
L.geoJSON(geoFeaturePoints, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: mallard });
    }
}).addTo(map);


map.addLayer(layer);