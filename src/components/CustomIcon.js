import L from "leaflet";

const CustomIcon = L.Icon.extend({
    options: {
        iconSize: [30, 30],
        shadowAnchor: null,
        iconAnchor: null
    }
});

export {CustomIcon};