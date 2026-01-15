import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './plantas.css';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Plantas = () => {
    const position: [number, number] = [-34.786331, -58.179527];
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`;

    const handleMapClick = () => {
        window.open(googleMapsUrl, "_blank");
    };

    return (
        <>
            <p className='name-ubi'>Casa Central - Planta Parque Industrial Plátanos: Avenida Nicolas Milazzo 3251, Berazategui.</p>
            <div className="plantas-container" onClick={handleMapClick}>
                <MapContainer center={position} zoom={16} scrollWheelZoom={true} className="map-container">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Argenpack Corrugados. <br /> Click para abrir en Google Maps.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
};

export default Plantas;
