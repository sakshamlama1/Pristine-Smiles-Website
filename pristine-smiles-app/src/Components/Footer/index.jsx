import "./index.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom"; // ✅ Import NavLink

const position = [-33.67081019487276, 151.11501729080265];

// Custom Font Awesome Marker Icon
const customMarkerIcon = L.divIcon({
    html: '<i class="fa fa-map-marker fa-3x" style="color: #5B9D7D;"></i>',
    className: "custom-fa-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});

// Footer Component
function Footer() {
    return (
        <div className="footer-component">
            <div className="footer-content">
                <div className="footer-items">
                    {/* Column 1 */}
                    <div className="column">
                        <h4>Pristine Smiles</h4>
                        <NavLink className="column-anchor" to="/about-us">About Us</NavLink>
                        <NavLink className="column-anchor" to="/faqs">FAQs</NavLink>
                        <NavLink className="column-anchor" to="/terms-and-conditions">Terms & Conditions</NavLink>
                        <NavLink className="column-anchor" to="/privacy-policy">Privacy Policy</NavLink>
                    </div>

                    {/* Column 2 */}
                    <div className="column">
                        <h4>Services and Payments</h4>
                        <NavLink className="column-anchor" to="/services/general">General Dentistry</NavLink>
                        <NavLink className="column-anchor" to="/services/cosmetic">Cosmetic Dentistry</NavLink>
                        <NavLink className="column-anchor" to="/payment-options">Payment Options</NavLink>
                        <NavLink className="column-anchor" to="/payment-plans">Payment Plans</NavLink>
                    </div>

                    {/* Column 3 */}
                    <div className="column">
                        <h4>Other</h4>
                        <div className="social-media">
                            <a href="https://x.com/smilcraftdental" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/smilecraftdental" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/smile-carft-dental/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="footer-map">
                <h4>OUR LOCATION</h4>
                <h6>Address: 599 Pacific Hwy, Mount Colah NSW 2079</h6>
                <MapContainer center={position} zoom={30} style={{ height: "175px", width: "100%", borderRadius: "10px" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position} icon={customMarkerIcon} />
                </MapContainer>
            </div>
        </div>
    );
}

export default Footer;
