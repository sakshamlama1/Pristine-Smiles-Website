import "./index.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [-33.67081019487276, 151.11501729080265];

// Custom Font Awesome Marker Icon
const customMarkerIcon = L.divIcon({
    html: '<i class="fa fa-map-marker fa-3x" style="color: #5B9D7D;"></i>', // Customize icon
    className: "custom-fa-marker", // Custom class for styling
    iconSize: [32, 32], // Adjust size
    iconAnchor: [16, 32] // Align correctly
});

// Footer Component
// This component renders the footer section of the website with links to important pages.
function Footer() {

    return (
        <div className="footer-component">
            <div className="footer-content">
                <div className="footer-items">
                    {/* Column 1 */}
                    <div className="column">
                        <h4>Pristine Smiles</h4>
                        <a className="column-anchor" href='/about-us'>About Us</a>
                        <a className="column-anchor" href='/faqs'>FAQs</a>
                        <a className="column-anchor" href='/terms-and-conditions'>Terms & Conditions</a>
                        <a className="column-anchor" href='/privacy-policy'>Privacy Policy</a>
                    </div>

                    {/* Column 2 */}
                    <div className="column">
                        <h4>Services and Payments</h4>
                        <a className="column-anchor" href='/services/general'>General Dentistry</a>
                        <a className="column-anchor" href='/services/cosmetic'>Cosmetic Dentistry</a>
                        <a className="column-anchor" href='/payment-options'>Payment Options</a>
                        <a className="column-anchor" href='/payment-plans'>Payment Plans</a>
                    </div>

                    {/* Column 3 */}
                    <div className="column">
                        <h4>Other</h4>
                        {/* Social Media Icons */}
                        <div className="social-media">
                            <a href="https://x.com/smilcraftdental" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i> {/* Twitter Icon */}
                            </a>
                            <a href="https://www.facebook.com/smilecraftdental" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i> {/* Facebook Icon */}
                            </a>
                            <a href="https://www.linkedin.com/company/smile-carft-dental/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
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
