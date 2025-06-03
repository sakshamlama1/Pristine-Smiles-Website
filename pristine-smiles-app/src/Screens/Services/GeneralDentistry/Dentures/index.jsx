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
import DenturesVideo from "../../../../assets/videos/Dentures.mp4";

function Dentures() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTURES</p>
                    </div>

                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={DenturesVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Dentures at Pristine Smiles Dental</h2>
                                    <p>
                                        Comfortable, natural-looking solutions for missing teeth — dentures are a <b>cost-effective, reliable</b> way to restore your smile and improve daily life. At Pristine Smiles Dental, we understand how important it is to replace missing teeth, not just for <b>eating and speaking</b>, but also for <b>maintaining facial structure and confidence</b>.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>What Are Dentures?</h2>
                                <p>
                                    Dentures are <b>removable dental appliances</b> designed to replace missing teeth. They restore the appearance and function of your natural teeth while supporting your cheeks and lips, preventing the sunken look that can occur after tooth loss.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Types of Dentures</h2>
                                <ul>
                                    <li>
                                        <b>Full Dentures:</b> Used when all teeth are missing in the upper, lower, or both jaws. They rest directly on your gums and restore full function and support.
                                    </li>
                                    <li>
                                        <b>Partial Dentures:</b> Ideal when some natural teeth remain. These dentures fill in gaps, prevent teeth from shifting, and improve chewing ability.
                                    </li>
                                    <li>
                                        <b>Implant-Retained Dentures:</b> These are secured using dental implants in the jawbone, providing added stability. They're especially helpful for lower dentures and can be removed for cleaning.
                                    </li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>How Are Dentures Made?</h2>
                                <p>
                                    Dentures are <b>custom-made</b> for each patient over several appointments, depending on factors like how many teeth need replacing, whether you've worn dentures before, or if extractions are required:
                                </p>
                                <ul>
                                    <li>
                                        <b>Conventional Dentures:</b> Made after any necessary teeth are removed and your gums have healed.
                                    </li>
                                    <li>
                                        <b>Immediate Dentures:</b> Placed on the same day as extractions. These ensure you’re never without teeth but may require more adjustments during healing.
                                    </li>
                                </ul>
                                <p>
                                    <b>Dentures can be made from:</b>
                                </p>
                                <ul>
                                    <li>High-grade plastic (acrylic)</li>
                                    <li>Lightweight metal and plastic combo (e.g., cobalt chrome)</li>
                                </ul>
                                <p>
                                    Your dentist will guide you on the most suitable option based on your needs and preferences. The denture teeth can also be colour-matched and shaped to look like your natural teeth.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Do I Need Teeth Removed First?</h2>
                                <p>
                                    If extractions are necessary, we may recommend waiting a few months before fitting a permanent denture to allow for proper healing. Alternatively, <b>immediate dentures</b> can be made in advance and fitted the same day as your extractions.
                                </p>
                                <p>
                                    <i><b>Note:</b> Immediate dentures may need more frequent adjustments or earlier replacement due to gum and bone changes.</i>
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Caring for Your Dentures</h2>
                                <p>Proper care ensures your dentures remain <b>comfortable</b> and <b>long-lasting</b>. Here are some <b>daily care tips</b>:</p>
                                <ul>
                                    <li>Brush twice daily with a soft brush and mild liquid soap — avoid toothpaste, as it’s too abrasive.</li>
                                    <li>Clean over a towel or bowl of water to avoid breakage if dropped.</li>
                                    <li>Soak daily in a denture-cleaning solution.</li>
                                    <li>Remove them at night to let your gums rest. Store in water or in a dry container.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Keep Up With Dental Check-Ups</h2>
                                <p>
                                    Even if you wear full dentures, <b>regular dental visits</b> are important. Over time, your mouth can change, which may require:
                                </p>
                                <ul>
                                    <li>Adjustments for comfort</li>
                                    <li>Relining for better fit</li>
                                    <li>Replacing old dentures</li>
                                </ul>
                                <p>
                                    These check-ups also help detect oral health issues like <b>oral thrush or oral cancer</b>, which can occur even without natural teeth.
                                </p>
                            </div>

                            <ServiceBooking 
                                title={"Smile, Eat, and Speak with Confidence Again"} 
                                content={"Missing several teeth? Our full and partial dentures are tailored to fit naturally and comfortably. Book your personalised denture consultation now."} 
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

export default Dentures;
