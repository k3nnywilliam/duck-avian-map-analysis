

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


let LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'src/img/mallard-duck-shadow2.png',
        iconSize: [20, 20],
        shadowSize:   [22, 22],
        shadowAnchor: [22, 94],
        iconAnchor: [22, 94]
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

/* // create geolines
L.geoJSON(geoFeaturesLines, {
    pointToLayer: function (feature, latlng) {
        return L.polyline(latlng, { linestyle });
    }
}).addTo(map);
 */

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