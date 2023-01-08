const markers = [
    {
        lngLat:[-73.97, 40.775699],
        icon: 'fa-solid fa-pizza-slice',
        color: 'purple',
    },
    {
        lngLat:[-73.96, 40.775699],
        icon: 'fa-solid fa-hand-spock',
        color: 'green',
        iconColor: 'lightyellow'
    },
    {
        lngLat:[-73.95, 40.775699],
        icon: 'fa-solid fa-hippo',
        color: 'red',
        scale: 1.25
    },
    {
        lngLat:[-73.94, 40.775699],
        icon: 'fa-solid fa-road',
        color: 'purple',
        iconColor: 'orange',
        scale: 1.5
    },
    {
        lngLat:[-73.93, 40.775699],
        icon: 'fa-regular fa-face-grimace',
        color: 'purple',
        scale: 2,
        rotation: 45
    },
]

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN3aG9uZ21hcGJveCIsImEiOiJjbDl6bzJ6N3EwMGczM3BudjZmbm5yOXFnIn0.lPhc5Z5H3byF_gf_Jz48Ug';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/dark-v11',
    zoom: 12,
    center: [-73.969799, 40.775699]
});

map.on('load', () => {
    // Set the default atmosphere style
    map.setFog({});


    markers.forEach((options) => {
        const popup = new mapboxgl.Popup({ offset: 32 }).setText(options.icon);

        new FontawesomeMarker(options)
        .setLngLat(options.lngLat)
        .setPopup(popup)
        .addTo(map);
    })
});