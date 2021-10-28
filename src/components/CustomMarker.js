const linestyle = {
    color: 'red',
    weight: 5,
    opacity: 0.6
},
stroke = {
    color: "#fff",
    weight: 7,
    opacity: 0.4
};

// custom duck marker
L.geoJSON(geoFeaturePoints, {
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.individual) {
            case 'Anas platyrhynchos': return L.marker(latlng, { icon: this.props.icon });
            case 'Cairina moschata': return L.marker(latlng, { icon: this.props.icon });
        }
    }
}).addTo(map);