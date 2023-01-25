import mapboxgl from 'mapbox-gl';

const DEFAULT_TOP_OFFSET = 7
const DEFAULT_FONT_SIZE = 12

class FontawesomeMarker extends mapboxgl.Marker {
    constructor(options, legacyOptions) {
        super(options, legacyOptions);

        const {
            icon,
            iconColor = '#FFF',
            scale = 1
        } = options

        if (icon) {
            const top = scale * DEFAULT_TOP_OFFSET
            const fontSize = `${DEFAULT_FONT_SIZE * scale}px`
            const iconElementString = `<i style="color:${iconColor};font-size: ${fontSize};position: absolute; left: 50%; transform: translate(-50%, 0); top: ${top}px;" class="${options.icon}"></i>`
            this._element.insertAdjacentHTML('beforeend', iconElementString)

            // remove the default circle from the marker
            this._element.querySelector('circle').remove()
        }
    }
}

export default FontawesomeMarker