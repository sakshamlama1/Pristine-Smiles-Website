import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceBooking from "../../../../Components/ServiceBooking";
import ServiceSection from "../../../../Components/ServiceSection";
import DentalBridgeVideo from "../../../../assets/videos/DentalBridge.mp4";

function DentalBridge() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTAL BRIDGE</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={DentalBridgeVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Dental Bridges at Pristine Smiles Dental</h2>
                                    <p>
                                        <b>Missing a tooth or multiple teeth</b> can affect more than just your smile—it can impact your ability to <b>eat</b>, <b>speak</b>, and maintain <b>proper bite alignment</b>. At <b>Pristine Smiles Dental</b>, we offer <b>custom dental bridges</b> to restore both the <b>appearance</b> and <b>function</b> of your smile.
                                    </p>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>What Is a Dental Bridge?</h2>
                                <p>
                                    A <b>dental bridge</b> is a <b>fixed, natural-looking solution</b> designed to replace one or more missing teeth by anchoring a false tooth (or teeth) to the natural teeth on either side of the gap. A dental bridge “<b>bridges</b>” the space left by a missing tooth. It typically consists of:
                                </p>
                                <ul>
                                    <li><b>Two crowns</b> that are placed on the healthy teeth (called <b>abutment teeth</b>) on either side of the gap</li>
                                    <li>A <b>false tooth (pontic)</b> that fills in the space, securely attached to the two crowns</li>
                                </ul>
                                <p>
                                    Bridges are <b>custom-made</b> from high-quality materials such as <b>porcelain</b>, <b>zirconia</b>, <b>gold alloy</b>, or <b>porcelain-fused-to-metal</b>, and are designed to <b>look and feel like your natural teeth</b>.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Benefits of a Dental Bridge</h2>
                                <ul>
                                    <li><b>Restores your smile</b> and confidence</li>
                                    <li><b>Improves chewing</b> and speaking ability</li>
                                    <li><b>Prevents remaining teeth from shifting</b> out of place</li>
                                    <li><b>Maintains the shape</b> of your face and jaw alignment</li>
                                    <li><b>Provides a long-lasting and fixed</b> alternative to removable dentures</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>The Dental Bridge Procedure</h2>
                                <p>
                                    Treatment for a dental bridge typically involves <b>two appointments</b>:
                                </p>
                                <h3>First Appointment – Tooth Preparation & Temporary Bridge:</h3>
                                <ul>
                                    <li>The teeth on either side of the gap are <b>carefully reshaped</b> to prepare for crowns.</li>
                                    <li>A <b>digital scan or impression</b> is taken to ensure an accurate, custom fit.</li>
                                    <li>A <b>temporary acrylic (plastic) bridge</b> is placed to protect the prepared teeth and maintain appearance while your permanent bridge is crafted in a dental lab.</li>
                                </ul>
                                <h3>Second Appointment – Permanent Bridge Placement:</h3>
                                <ul>
                                    <li>The <b>temporary bridge is removed</b>.</li>
                                    <li>The final bridge is carefully checked for <b>fit, comfort, and color match</b>.</li>
                                    <li>It is then <b>cemented securely</b> onto the prepared teeth, restoring your <b>bite and smile</b>.</li>
                                </ul>
                                <p>
                                    We work closely with skilled <b>dental technicians</b> to ensure your bridge is both <b>durable</b> and <b>aesthetically matched</b> to your natural teeth.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Looking After Your Dental Bridge at Home</h2>
                                <p>
                                    A dental bridge is a <b>long-term solution</b>, but <b>proper care</b> is essential to help it last as long as possible.
                                </p>
                                <h3>Daily Care Tips:</h3>
                                <ul>
                                    <li><b>Brush twice a day</b> with a fluoride toothpaste to protect the natural teeth supporting your bridge.</li>
                                    <li><b>Clean underneath</b> the false tooth daily, using:</li>
                                    <ul>
                                        <li><b>Superfloss</b></li>
                                        <li><b>Floss threaders</b></li>
                                        <li><b>Interdental brushes</b></li>
                                    </ul>
                                    <li>Avoid biting <b>hard foods</b> or objects that could damage the bridge.</li>
                                    <li>Visit us regularly for <b>check-ups and professional cleanings</b> so we can monitor the condition of your bridge and surrounding teeth.</li>
                                </ul>
                                <p>
                                    Our dental team will show you exactly how to <b>clean around and underneath your bridge</b> effectively to keep your smile healthy.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Is a Dental Bridge Right for You?</h2>
                                <p>
                                    Dental bridges are just one option for replacing missing teeth. Other options include:
                                </p>
                                <ul>
                                    <li><b>Partial dentures</b> – removable and often more affordable</li>
                                    <li><b>Dental implants</b> – permanent replacements that don’t affect nearby teeth</li>
                                </ul>
                                <p>
                                    At <b>Pristine Smiles Dental</b>, we’ll discuss all suitable options with you and help you <b>choose the best treatment</b> for your <b>lifestyle, needs, and budget</b>.
                                </p>
                            </div>

                            <ServiceBooking 
                                title={"Restore Your Smile with Confidence"} 
                                content={"If you're missing one or more teeth, don’t let it affect your quality of life. Schedule a consultation today with the team at Pristine Smiles to find out if a dental bridge is the right solution for you."} 
                            />                            
                        </div>
                    </section>
                    <Carousel images={imageList} />
                    <SpecialOffersCarousel offers={offersList} />
                    <PriceListButton />
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DentalBridge;
