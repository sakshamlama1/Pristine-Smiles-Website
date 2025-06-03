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
import EmergencyDentistryPhoto from "../../../../assets/special-offers/offer-image-3.png";

function EmergencyDentistry() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>EMERGENCY DENTISTRY</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <img src={EmergencyDentistryPhoto} alt="EmergencyDentistry"></img>
                                </div>
                                <div className="services-media-right">
                                    <p>
                                        A simple <b>toothache</b> can quickly disrupt your day, and for some, the pain can be <b>intense</b>, recurring <b>intermittently</b> for several days. 
                                        This can significantly affect your <b>work</b>, <b>leisure activities</b>, and <b>eating habits</b>. At Pristine Smiles, we understand that <b>dental emergencies</b> can arise at any time, and we are here to <b>treat you promptly</b>.
                                    </p>
                                    <p>
                                        Our <b>modern</b>, <b>fully equipped clinic</b> is designed to put you at ease, <b>diagnosing</b> and <b>treating</b> your dental issues quickly and effectively. 
                                        If you’ve experienced a <b>traumatic dental incident</b>, such as a <b>knocked-out tooth</b>, <b>dental abscess</b>, <b>facial swelling</b>, or a <b>fractured tooth</b>, 
                                        we will see you on the <b>same day</b> to help address your concerns.
                                    </p>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>What to Do in a Dental Emergency?</h2>
                                <p>
                                    Handling a dental emergency can be overwhelming, but <b>staying calm is key</b>. Our dentists have outlined some helpful steps for common dental emergencies and are available to provide additional guidance over the phone until you can come in for treatment.
                                </p>
                            </div>

                            <div className="services-section">
                                <h3>1. Tooth Knocked Out</h3>
                                <ul>
                                    <li>Locate the tooth.</li>
                                    <li>Rinse the tooth gently with milk or saline (avoid scrubbing the root).</li>
                                    <li>If possible, gently place the tooth back into its socket. If not, store it in milk or saliva.</li>
                                    <li>Get to us immediately — <b>re-implantation is most successful within 30 to 60 minutes</b>.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h3>2. Toothache</h3>
                                <ul>
                                    <li>Rinse your mouth with warm salty water for temporary relief.</li>
                                    <li>Keep the area clean and contact us as soon as possible.</li>
                                    <li>Avoid placing painkillers directly on gums as they can burn the tissue.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h3>3. Broken or Damaged Jaw</h3>
                                <p>
                                    Jaw injuries are serious and require <b>immediate medical attention</b>. Come to our clinic for a referral or head to your nearest emergency room.
                                </p>
                            </div>

                            <div className="services-section">
                                <h3>4. Trauma</h3>
                                <p>
                                    Trauma to the teeth, such as <b>fractures or displacement</b>, needs urgent care to increase the chances of saving the tooth. If the dental nerves are exposed, this can cause intense pain when in contact with air.
                                </p>
                                <p>
                                    We <b>reserve emergency appointments</b> for situations like these and provide definitive treatment after a full examination. We’ll explain your treatment options and make sure your long-term dental health is protected.
                                </p>
                            </div>

                            <ServiceBooking
                                title={"Urgent Dental Care When You Need It Most"}
                                content={"Toothache? Broken tooth? Don’t wait. Call or book now for same-day emergency care at Pristine Smiles."}
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

export default EmergencyDentistry;
