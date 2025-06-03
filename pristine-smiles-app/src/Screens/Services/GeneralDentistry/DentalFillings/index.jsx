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
import DentalFillingsVideo from "../../../../assets/videos/DentalFillings.mp4";

function DentalFillings() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTAL FILLINGS</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={DentalFillingsVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Dental Fillings at Pristine Smiles Dental</h2>
                                    <p>
                                        At <b>Pristine Smiles Dental</b>, our goal is to help restore your teeth so they <b>look, feel, and function naturally</b>. If you have a tooth that's <b>damaged due to decay, wear, or fracture</b>, a dental filling can restore its strength and structure.
                                    </p>
                                    <p>
                                        Fillings are one of the most <b>common dental treatments</b> and are used to rebuild the tooth surface after removing decay or to repair chipped or worn teeth. We offer a variety of <b>filling materials</b> tailored to your individual needs, the location of the tooth, and the extent of the damage.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>Types of Dental Filling Materials</h2>
                                <p>Your dentist will help you choose the most suitable filling material based on several factors such as the location of the tooth, your bite, the size of the cavity, and your aesthetic preferences.</p>

                                <ul>
                                    <p><b>Composite Resin (Tooth-Coloured Fillings):</b>
                                        <ul>
                                            <li>Matches the natural colour of your teeth</li>
                                            <li>Commonly used in both front and back teeth</li>
                                            <li>Bonds directly to the tooth surface, requiring minimal removal of natural tooth structure</li>
                                            <li>Ideal for cosmetic repairs such as chips or gaps</li>
                                            <li>Aesthetic and virtually invisible when properly matched</li>
                                        </ul>
                                    </p>
                                    <p><b>Glass Ionomer Cement (GIC):</b>
                                        <ul>
                                            <li>Tooth-coloured, though not as strong as composite resin</li>
                                            <li>Releases fluoride, which helps protect the tooth from further decay</li>
                                            <li>Often used in areas of low bite pressure or for temporary fillings and children's teeth</li>
                                        </ul>
                                    </p>
                                    <p><b>Dental Amalgam (Silver Fillings):</b>
                                        <ul>
                                            <li>Durable and long-lasting material made from a mix of metals</li>
                                            <li>Less preferred today due to metallic appearance and need for more tooth structure removal</li>
                                            <li>Some patients choose to replace old amalgam fillings for aesthetic reasons</li>
                                        </ul>
                                    </p>
                                    <p><b>Gold and Porcelain Inlays:</b>
                                        <ul>
                                            <li>Made outside of the mouth and then bonded into the cavity</li>
                                            <li>Extremely strong and long-lasting</li>
                                            <li>Gold is highly durable, while porcelain can be colour-matched</li>
                                            <li>Typically requires two visits, as they are crafted in a dental lab</li>
                                        </ul>
                                    </p>
                                    <p><b>Temporary Fillings:</b>
                                        <ul>
                                            <li>Used during emergency treatment</li>
                                            <li>Between root canal treatment sessions</li>
                                            <li>When more time is needed to assess the tooth</li>
                                            <li>If multiple treatments are needed over time</li>
                                        </ul>
                                    </p>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Dental Filling Procedure: What to Expect</h2>
                                <ul>
                                    <li><b>Examination & Diagnosis:</b> Your dentist examines your teeth using X-rays if needed.</li>
                                    <li><b>Numbing the Area:</b> A local anaesthetic is applied to ensure comfort.</li>
                                    <li><b>Removing Decay or Damage:</b> The decayed portion is precisely removed.</li>
                                    <li><b>Cleaning & Preparation:</b> The tooth is cleaned and prepared. A bonding agent may be applied.</li>
                                    <li><b>Placing the Filling:</b> Material is added in layers, hardened with a curing light (if composite), and shaped.</li>
                                    <li><b>Final Check:</b> Your bite is checked and adjusted as needed.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Caring for Your Dental Fillings at Home</h2>
                                <ul>
                                    <li>Brush twice daily with fluoride toothpaste</li>
                                    <li>Floss once a day to protect areas near the filling</li>
                                    <li>Avoid biting hard objects like ice or pens</li>
                                    <li>Visit us regularly for check-ups and cleanings</li>
                                    <li>Watch for changes in your filling or discomfort</li>
                                </ul>
                            </div>

                            <ServiceBooking 
                                title={"Restore and Protect Your Smile"} 
                                content={"Whether you need a new filling or want to replace an old one, our experienced team at Pristine Smiles is here to help. Book your appointment today and enjoy a healthier, more confident smile."} 
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

export default DentalFillings;