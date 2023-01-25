export default {
    input: 'src/index.js',
    output: {
      name: 'FontawesomeMarker',
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        'mapbox-gl': 'mapboxgl'
      }
    }
  };