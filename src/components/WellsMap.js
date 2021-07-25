import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as wellsData from "../data/data.json";

//TODO: Fix issue of markers not showing up
const WellsMap = () => {
    const position = [45.4, -75.7]

    return (
        <MapContainer center={position} zoom={13} style={{height: "1000px"}} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {wellsData.features.map(well => (
                    <Marker
                        key={well.properties.PARK_ID}
                        position={[
                            well.geometry.coordinates[1],
                            well.geometry.coordinates[0]
                        ]}>
                        <Popup>
                            A pretty CSS3 {well.properties.PARK_ID}. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                )
            )}
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default WellsMap
