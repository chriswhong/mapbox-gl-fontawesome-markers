
        const icons = [
            'fa-solid fa-pizza-slice',
            'fa-solid fa-hand-spock',
            'fa-solid fa-hippo',
            'fa-solid fa-road',
            'fa-regular fa-face-grimace',
            'fa-solid fa-fire',
            'fa-solid fa-bicycle',
            'fa-brands fa-android',
            'fa-solid fa-sliders',
            'fa-solid fa-flask',
            'fa-solid fa-person',
            'fa-solid fa-bath',
            'fa-solid fa-earth-americas',
            'fa-solid fa-gamepad',
            'fa-solid fa-bug',
            'fa-solid fa-fish',
            'fa-solid fa-anchor',
            'fa-solid fa-user-secret',
            'fa-solid fa-microchip',
            'fa-solid fa-robot',
            'fa-brands fa-react',
            'fa-solid fa-virus',
            'fa-solid fa-medal',
            'fa-solid fa-chair',
            'fa-solid fa-plug',
            'fa-brands fa-square-js',
            'fa-regular fa-lightbulb',
            'fa-brands fa-linux'
        ]

        const colors = ["#d9ed92", "#b5e48c", "#99d98c", "#76c893", "#52b69a", "#34a0a4", "#168aad", "#1a759f", "#1e6091", "#184e77"]
        const iconColors = ['crimson', 'darkslategray', 'indigo', 'midnightblue', 'paleturquoise', 'silver', 'darkgreen', 'whitesmoke', 'orange', 'yellow']

        mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN3aG9uZ21hcGJveCIsImEiOiJjbDl6bzJ6N3EwMGczM3BudjZmbm5yOXFnIn0.lPhc5Z5H3byF_gf_Jz48Ug';
        const map = new mapboxgl.Map({
            container: 'map',
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/dark-v11',
            zoom: 7,
            center: [-77.587241, 39.153318]
        });

        map.on('load', () => {
            // Set the default atmosphere style
            map.setFog({});


            icons.forEach((icon) => {
                const popup = new mapboxgl.Popup({ offset: 32 }).setText(icon);

                const lngLatFC = turf.randomPoint(1, { bbox: [-79.530448, 38.342557, -75.644034, 39.954844] })

                const colorIndex = Math.floor(Math.random() * colors.length);
                const color = colors[colorIndex]
                const iconColor = iconColors[colorIndex]
                const scale = (Math.random() * (1.0000 - 2.0000) + 2.0000).toFixed(4)

                new FontawesomeMarker({
                    icon,
                    color,
                    iconColor,
                    scale
                })
                    .setLngLat(lngLatFC.features[0].geometry.coordinates)
                    .setPopup(popup)
                    .addTo(map);
            })
        });
