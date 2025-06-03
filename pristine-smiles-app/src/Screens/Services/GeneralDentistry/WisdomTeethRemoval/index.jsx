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
import WisdomTeethRemovalVideo from "../../../../assets/videos/WisdomTeethRemoval.mp4";

const faqsArray = [
    {
        question: "Is wisdom tooth extraction painful?",
        answer: (
            <>
              With modern techniques and anesthesia, most patients report <b>minimal discomfort</b> during and after the procedure.
            </>
        )
    },
    {
        question: "How long is recovery?",
        answer: (
            <>
                Recovery typically takes <b>3–5 days</b>, with most people returning to normal activities within a week.
            </>
        )
    },
    {
        question: "Do all wisdom teeth need to be removed?",
        answer: (
            <>
              Not necessarily. If your wisdom teeth are <b>healthy and properly aligned</b>, removal may not be needed. Our evaluation will help you decide.
            </>
        )
    }
];

function WisdomTeethRemoval() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>WISDOM TEETH REMOVAL</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={WisdomTeethRemovalVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Safe, Professional Wisdom Tooth Extraction Near You</h2>
                                    <p>
                                        Wisdom teeth, also known as <b>third molars</b>, typically emerge between the ages of <b>17 and 25</b>. While some people have no issues, many experience <b>pain, crowding, or infection</b> that requires professional removal. At <b>Pristine Smiles</b>, we provide <b>gentle, expert wisdom teeth removal</b> in a <b>comfortable and supportive environment</b>.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>Why Remove Wisdom Teeth?</h2>
                                <p>Wisdom teeth can cause a range of dental issues, especially if they are impacted (stuck under the gum or jawbone). Common reasons for removal include:</p>
                                <ul>
                                    <li>Pain or swelling</li>
                                    <li>Infection or gum disease</li>
                                    <li>Tooth crowding or damage to nearby teeth</li>
                                    <li>Cysts or other oral health concerns</li>
                                </ul>
                                <p>
                                    Removing problematic wisdom teeth can <b>prevent long-term dental complications</b> and <b>protect your overall oral health</b>.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>What to Expect</h2>
                                <h3>Consultation and X-rays</h3>
                                <p>
                                    Our experienced team will evaluate your wisdom teeth using <b>digital imaging</b> to determine the best course of action. If a wisdom tooth is difficult to remove or needs a surgical removal, we will refer you to an <b>Oral Surgeon</b> and will work together to ensure the removal process goes smoothly.
                                </p>

                                <h3>Comfortable Procedure</h3>
                                <p>
                                    We offer <b>local anesthesia, sedation, or general anesthesia</b> options to ensure your comfort during the procedure.
                                </p>

                                <h3>Quick Recovery</h3>
                                <p>
                                    Most patients recover in a few days with simple <b>at-home care instructions</b>. We’ll provide a full aftercare guide and are available for follow-up questions.
                                </p>
                            </div>

                            <FAQComponent faqs={faqsArray} />
                            <ServiceBooking 
                                title={"Gentle Wisdom Tooth Extractions"}
                                content={"If you or your teen is experiencing discomfort or have been advised to consider wisdom teeth removal, we’re here to help. Our experienced team ensures safe, comfortable extractions. Schedule an assessment today."}
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

export default WisdomTeethRemoval;
