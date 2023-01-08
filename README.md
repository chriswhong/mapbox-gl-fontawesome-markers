# mapbox-gl-fontawesome-markers

Adds Fontawesome icons to Mapbox GL JS default Map Markers. 

This package extends `mapboxgl.Marker`, adding two new options: `icon` and `iconColor`.  `icon` is any fontawesome icon class (e.g. `fa-solid fa-pizza-slice`) and `iconColor` is any html or hex color code.  The fontawesome icon specified in `icon` will be added to the marker in place of the default white circle.

All built-in [`mapboxgl.Marker`](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker) options are still available, so you can still set the `color`, `scale`, `rotation`, etc as usual.

[Live Demo on Github Pages](https://chriswhong.github.io/mapbox-gl-fontawesome-markers/)

<img width="589" alt="Mapbox_GL_Fontawesome_Markers_Demo_and_Pages" src="https://user-images.githubusercontent.com/1833820/211178457-3249e242-6eda-49b0-bad1-17ce038c654d.png">


**Requires [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) and [fontawesome](https://fontawesome.com/).**

### Installing

```
npm install mapbox-gl-fontawesome-markers
```

### Usage in your application

**When using modules**

```js
import mapboxgl from 'mapbox-gl';
import FontawesomeMarkers from "mapbox-gl-fontawesome-markers";
```

**When using a CDN**

```html
<script src='https://cdn.jsdelivr.net/npm/mapbox-gl-fontawesome-markers@0.0.1/dist/index.js'></script>
```

### Example usage

```js
mapboxgl.accessToken = 'YOUR_ACCESS_TOKEN';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [40, -74.50],
  zoom: 9
});

const marker = new FontawesomeMarker({
    icon: 'fa-solid fa-pizza-slice',
    iconColor: 'steelblue',
    color: '#fa7132'
})
  .setLngLat([40, -74.50])
  .addTo(map);
```

## Development

Install dependencies, build the bundle and load an example

```
npm install
npm run build
# serve `/example/static-html/index.html` using a local webserver
```
