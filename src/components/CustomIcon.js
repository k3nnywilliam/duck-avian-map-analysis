import L from "leaflet";

const CustomIcon = L.Icon.extend({
    options: {
        iconSize: [30, 30],
        shadowAnchor: null,
        iconAnchor: null
    }
});

const markerOptions = {
    showMarker: true,
    removeOnEnd: false,

}

export default CustomIcon;