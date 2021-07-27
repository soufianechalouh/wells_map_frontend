import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster'

const WellsMap = ({ wellsData }) =>{

    const position = [40.1, -100.1]

    return (
        <div>
        <MapContainer center={position} zoom={5} style={{height: "1000px"}} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>

            {Object.keys(wellsData).length > 0 ? wellsData.features.map(well => (
                    <Marker
                        key={well.properties.PNAME}
                        position={[
                            well.geometry.coordinates[1],
                            well.geometry.coordinates[0]
                        ]}>
                        <Popup>
                            {well.properties.PNAME} - ({well.properties.PSTATABB}) <br/> Easily customizable.
                        </Popup>
                    </Marker>
                )
            ) : ""}
            </MarkerClusterGroup>
        </MapContainer>
            </div>
    )
}

export default WellsMap
