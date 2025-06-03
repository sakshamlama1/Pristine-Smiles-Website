import "./index.css";
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
import CrownBefore from "../../../../assets/CrownBefore.png";
import CrownAfter from "../../../../assets/CrownAfter.png";

function DentalCrowns() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTAL CROWNS</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section">
                                <div className="services-section">
                                    <h2>Dental Crowns at Pristine Smiles Dental</h2>
                                    <p>
                                        At <b>Pristine Smiles Dental</b>, dental crowns are one of our most effective solutions for <b>restoring and protecting damaged teeth</b>. Whether your tooth is <b>cracked, severely decayed, or has had a root canal</b>, a crown can help restore its <b>strength, function, and appearance</b>.
                                    </p>
                                </div>
                                <div className="services-section-images">
                                    <div className="crown-image-card">
                                        <img src={CrownBefore} alt="Before Crown" />
                                        <span className="crown-label">Before Crown</span>
                                    </div>
                                    <div className="crown-image-card">
                                        <img src={CrownAfter} alt="After Crown" />
                                        <span className="crown-label">After Crown</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="services-section">
                                <h2>Why You Might Need a Crown</h2>
                                <ul>
                                    <li>Cracked, worn-down, or broken teeth</li>
                                    <li>Severe tooth decay</li>
                                    <li>Following root canal therapy</li>
                                    <li>Cosmetic improvement for misshapen or discolored teeth</li>
                                    <li>To support a large filling when there’s not enough natural tooth left</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Types of Crown Materials</h2>
                                <p>We offer crowns made from <b>high-quality materials</b>, including:</p>
                                <ul>
                                    <li><b>Porcelain</b> – For a natural, tooth-colored appearance</li>
                                    <li><b>Zirconia</b> – Extremely strong and tooth-colored</li>
                                    <li><b>Gold alloy</b> – Durable and biocompatible, ideal for back teeth</li>
                                    <li><b>Porcelain-fused-to-metal</b> – Combines strength with aesthetic appeal</li>
                                </ul>
                                <p>
                                    Porcelain and zirconia crowns are <b>matched to your natural tooth color</b> for a seamless finish.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>CEREC Same-Day Crowns – Crowns in Just One Visit</h2>
                                <p>
                                    We’re proud to offer <b>CEREC same-day crowns</b>—a revolutionary digital solution that allows you to receive your custom crown in a <b>single appointment</b>.
                                </p>
                                <h3>What Is CEREC?</h3>
                                <p>
                                    CEREC (<i>Chairside Economical Restoration of Esthetic Ceramics</i>) uses <b>3D scanning</b> and <b>CAD/CAM technology</b> to design and produce your crown while you wait.
                                </p>
                                <h3>How It Works:</h3>
                                <ul>
                                    <li><b>Digital Scan:</b> A comfortable, accurate 3D scan replaces messy impressions</li>
                                    <li><b>Design & Milling:</b> Your crown is digitally designed and milled in-office from ceramic material</li>
                                    <li><b>Same-Day Placement:</b> We bond your crown in place—usually within an hour</li>
                                </ul>
                                <h3>Benefits of CEREC Crowns:</h3>
                                <ul>
                                    <li>No temporary crown needed</li>
                                    <li>No messy impressions</li>
                                    <li>Fewer appointments</li>
                                    <li>Quick, precise, and durable results</li>
                                    <li>Natural-looking, tooth-colored finish</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Traditional Crowns – Two-Visit Process</h2>
                                <p>
                                    For patients who prefer or require a traditional crown, we offer high-quality lab-fabricated options involving <b>two appointments</b>.
                                </p>
                                <h3>First Appointment:</h3>
                                <ul>
                                    <li>Tooth reshaped and prepared for crown</li>
                                    <li>Impression or 3D scan taken and sent to a dental lab</li>
                                    <li>Temporary crown placed for protection</li>
                                </ul>
                                <h3>Second Appointment:</h3>
                                <ul>
                                    <li>Permanent crown bonded securely in place</li>
                                    <li>Fit, comfort, and appearance are checked before final placement</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Caring for Your Dental Crowns at Home</h2>
                                <p>
                                    With the right care, your crown can <b>last for many years</b>. Here’s how to look after it:
                                </p>
                                <ul>
                                    <li>Brush twice a day using fluoride toothpaste</li>
                                    <li>Clean between teeth daily with floss or interdental brushes</li>
                                    <li>Be gentle but thorough around the gumline</li>
                                    <li>Avoid biting hard objects like ice, pens, or hard candies</li>
                                    <li>Attend regular check-ups and professional cleanings</li>
                                </ul>
                            </div>

                            <ServiceBooking 
                                title={"Protect and Strengthen Your Teeth"}  
                                content={"Whether you need a traditional crown or prefer the speed and convenience of same-day CEREC technology, Pristine Smiles has a solution tailored to your needs. Book your appointment today and restore your smile with confidence."}
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

export default DentalCrowns;
