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
import ChildrenDentistryVideo from "../../../../assets/videos/ChildrenDentistry.mp4"

const faqsArray = [
    {
        question: "When Should My Child Start Seeing the Dentist?",
        answer: (
            <>
                The first “regular” dental visit should ideally occur just after your child’s <b>second birthday</b>. During this visit, we will gently examine your child’s teeth and gums, helping to establish positive dental habits early.
            </>
        )
    },
    {
        question: "What Happens During the First Visit?",
        answer: (
            <>
                The first dental visit typically involves very little treatment. You may be asked to sit with your child in the dental chair or wait in the reception area to help build trust between your child and the dentist. The goal is to create a <b>positive and relaxed environment</b> for future visits.
            </>
        )
    },
    {
        question: "What Dental Work Will My Child Need?",
        answer: (
            <>
                Most children’s dental care focuses on <b>prevention</b>. We may take <b>x-rays</b> to check for cavities and monitor the development of permanent teeth. We may also clean your child’s teeth and apply <b>fluoride</b> to protect them. The most important part of the visit will be <b>guidance on oral hygiene</b>, and you’re encouraged to ask any questions regarding your child’s dental care.
            </>
        )
    },
    {
        question: "Why Do Kids Develop Cavities?",
        answer: (
            <>
                Cavities in children often result from a diet high in sugary foods and irregular brushing. Consistency in <b>oral hygiene</b> and reducing sugar intake are key. The consistency of saliva also plays a role: thinner saliva helps wash away food quickly, whereas thicker saliva (often caused by high sugar intake) can leave food particles and acid-producing bacteria on teeth, leading to cavities.
            </>
        )
    },
    {
        question: "How Can Cavities Be Prevented in Kids?",
        answer: (
            <>
                <ul>
                    <li>Limit the frequency of meals and snacks.</li>
                    <li>Watch what your child drinks.</li>
                    <li>Avoid sticky foods.</li>
                    <li>Encourage nutritious snacks.</li>
                </ul>
            </>
        )
    },
    {
        question: "Are Baby Teeth Important?",
        answer: (
            <>
                Yes! <b>Baby teeth</b> hold space for permanent teeth and are crucial for proper chewing, biting, speech development, and overall appearance. Taking care of baby teeth sets the foundation for healthy permanent teeth.
            </>
        )
    }
];

function ChildrenDentalServices() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>CHILDREN'S DENTAL SERVICES</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={ChildrenDentistryVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Who We Are?</h2>
                                    <p>
                                        Pristine Smiles is a <b>family-oriented dental practice</b>, and we take great joy in providing dental care for children. Our friendly and caring dental team is committed to ensuring your child feels comfortable, relaxed, and safe during every visit.
                                    </p>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>First Visit Tips</h2>
                                <ul>
                                    <li><b>Read books</b> about going to the dentist to familiarize your child.</li>
                                    <li><b>Talk with them</b> about what the dentist will do during their first visit.</li>
                                    <li><b>Speak positively</b> about your own dental experiences to set a good example.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>What to Expect at the First Dental Visit?</h2>
                                <ul>
                                    <li><b>Examination</b> of your child’s mouth, teeth, and gums.</li>
                                    <li>Evaluation of any <b>adverse habits</b>, such as thumb sucking.</li>
                                    <li>Check if your child needs <b>fluoride treatment</b>.</li>
                                    <li>Oral <b>hygiene guidance</b> for cleaning your child’s teeth and gums.</li>
                                    <li>We will suggest a <b>schedule for regular dental visits</b>.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Fissure Sealants</h2>
                                <p>
                                    Fissure sealants are <b>tooth-colored resin restorations</b> applied to the biting surfaces of healthy teeth. These help prevent decay in the deep grooves (fissures) of teeth that are hard to clean with a toothbrush. It’s a <b>simple, non-invasive procedure</b> that usually requires no drilling or injections.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Early Orthodontics Evaluation</h2>
                                <p>
                                    An early orthodontic check-up can identify alignment issues or delays in tooth eruption that could be corrected with early intervention. This also helps identify if retained baby teeth are affecting the alignment of your child’s teeth and jaws.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Fluoride Treatment</h2>
                                <p>
                                    Fluoride treatments help <b>harden tooth enamel</b>, reducing the risk of cavities. During regular check-ups, we will assess your child’s risk of tooth decay and recommend fluoride treatments when necessary. This is a <b>safe, non-invasive</b> procedure that helps protect your child’s teeth.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Mouthguards</h2>
                                <p>
                                    We recommend <b>custom-made sports mouthguards</b> to protect your child’s teeth and gums during physical activities. Mouthguards minimize the risk of dental injuries, helping preserve your child’s smile.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Medicare Child Dental Benefits Schedule</h2>
                                <p>
                                    The <b>Medicare Child Dental Benefits Schedule (CDBS)</b> provides benefits for eligible children aged 2–17 years for general dental services. The total entitlement is capped at <b>$1,095</b> over two calendar years. At Pristine Smiles, we can <b>bulk bill</b> eligible treatments directly to <b>Medicare</b>.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Eligibility for CDBS</h2>
                                <p>
                                    Children aged <b>2–17 years</b> who receive, or whose family receives, government benefits such as the <b>Family Tax Benefit Part A</b> are eligible for the CDBS. If your child qualifies, they can receive important dental treatments at <b>no out-of-pocket cost</b>.
                                </p>
                            </div>
                            
                            <FAQComponent faqs={faqsArray} />
                            <ServiceBooking 
                                title={"Gentle Care for Little Smiles"} 
                                content={"Ensure your child’s smile grows healthy and strong. Book a friendly, stress-free dental check-up for your little one at Pristine Smiles today."} 
                            />
                        </div>
                    </section>
                    <Carousel images={imageList} />
                    <SpecialOffersCarousel offers={offersList}/>
                    <PriceListButton />
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ChildrenDentalServices;
