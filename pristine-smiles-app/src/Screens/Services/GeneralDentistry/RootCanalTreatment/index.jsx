import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import FAQComponent from "../../../../Components/FAQComponent";
import ServiceBooking from "../../../../Components/ServiceBooking";
import ServiceSection from "../../../../Components/ServiceSection";
import RootCanalTreatmentVideo from "../../../../assets/videos/RootCanalTreatment.mp4";

const faqsArray = [
    {
        question: "Can root canals be avoided?",
        answer: (
            <>
                Yes. <b>Regular brushing, flossing, and dental visits</b> help prevent the issues that lead to root canals.
            </>
        )
    },
    {
        question: "Is the procedure painful?",
        answer: (
            <>
                Most discomfort occurs during the <b>anesthesia injection</b>. Afterward, most people feel <b>relief</b> from the infection-related pain.
            </>
        )
    },
    {
        question: "What if I delay treatment?",
        answer: (
            <>
                <ul>
                    <li>Tooth loss</li>
                    <li>Spread of infection to other areas</li>
                    <li>Bone damage in the jaw</li>
                </ul>
            </>
        )
    }
];

function RootCanalTreatment() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>ROOT CANAL TREATMENT</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={RootCanalTreatmentVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>What Is a Root Canal?</h2>
                                    <p>
                                        A root canal is a dental procedure that treats <b>infection</b> in the tooth’s <b>pulp</b> — the soft inner tissue. It helps save your <b>natural tooth</b> and relieve <b>pain</b>.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>Why Would I Need One?</h2>
                                <p>You might need a root canal if <b>bacteria</b> reach your tooth pulp through:</p>
                                <ul>
                                    <li>A <b>deep cavity</b></li>
                                    <li>A <b>cracked or damaged tooth</b></li>
                                </ul>
                                <p>This can cause <b>pain</b>, <b>swelling</b>, and <b>infection</b>.</p>
                            </div>

                            <div className="services-section">
                                <h2>Signs You May Need a Root Canal</h2>
                                <ul>
                                    <li><b>Persistent toothache</b></li>
                                    <li><b>Pain</b> when chewing or touching the tooth</li>
                                    <li><b>Swollen or tender gums</b></li>
                                    <li><b>Pimple-like bump</b> on the gums</li>
                                    <li><b>Tooth discoloration</b></li>
                                    <li><b>Loose tooth</b></li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>The Procedure: What Happens During a Root Canal?</h2>
                                <ul>
                                    <li>Your dentist takes <b>X-rays</b> and may run <b>sensitivity or electrical tests</b> to confirm the diagnosis.</li>
                                    <li>You'll be given <b>local anesthesia</b> to numb the area.</li>
                                    <li>A <b>dental dam</b> is placed to keep the area dry.</li>
                                    <li>A <b>small opening</b> is made in the tooth to access the pulp.</li>
                                    <li>The <b>infected pulp</b> is removed, and the space is <b>cleaned and disinfected</b>.</li>
                                    <li>The canals are filled with a <b>rubber-like material</b> called <b>gutta-percha</b>.</li>
                                    <li>A <b>temporary filling</b> is applied, followed later by a <b>permanent crown</b>.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Aftercare</h2>
                                <ul>
                                    <li><b>Recovery</b> usually takes under a week.</li>
                                    <li>Eat <b>soft foods</b> and avoid chewing on the treated tooth until the crown is placed.</li>
                                    <li>Maintain <b>good oral hygiene</b> and avoid <b>smoking</b>.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Final Note</h2>
                                <p>
                                    If you notice <b>lingering tooth pain</b> or <b>sensitivity</b> to hot or cold, see your dentist. These may be signs of an <b>infection</b> that requires a root canal. Early treatment helps <b>protect your oral health</b> and prevent complications.
                                </p>
                            </div>

                            <FAQComponent faqs={faqsArray} />      
                            <ServiceBooking
                                title={"Save Your Natural Tooth – Painlessly"}
                                content={"Root canal therapy doesn’t have to be scary. Relieve pain and save your tooth in just one or two visits. Book a consultation now."}
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

export default RootCanalTreatment;
