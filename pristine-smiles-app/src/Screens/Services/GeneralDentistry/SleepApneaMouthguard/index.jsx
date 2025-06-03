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
import SleepApneaMouthguardVideo from "../../../../assets/videos/SleepApneaMouthguard.mp4";

function SleepApneaMouthguard() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>SLEEP APNEA MOUTHGUARD</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={SleepApneaMouthguardVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Protect Your Smile and Your Sleep with Custom-Made Dental Appliances</h2>
                                    <p>
                                        At Pristine Smiles Dental, we offer custom dental appliances designed to improve your sleep, protect your teeth, and reduce discomfort caused by conditions like <b>bruxism (teeth grinding)</b> and <b>obstructive sleep apnoea (OSA)</b>. If you wake up with a sore jaw, frequent headaches, or your partner notices grinding sounds at night, you might benefit from one of the following solutions:
                                    </p>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>Bruxism (Teeth Grinding & Clenching)</h2>
                                <p>
                                    Bruxism is the involuntary grinding or clenching of teeth—most commonly during sleep. It can lead to:
                                </p>
                                <ul>
                                    <li>Worn, chipped, or fractured teeth</li>
                                    <li>Jaw pain or stiffness</li>
                                    <li>Headaches and facial muscle fatigue</li>
                                    <li>Increased tooth sensitivity</li>
                                    <li>Damaged fillings, crowns, or dental restorations</li>
                                    <li>TMJ (temporomandibular joint) disorders</li>
                                </ul>
                                <p>
                                    Many people are unaware they grind their teeth at night until symptoms arise or a partner notices the noise. If you're experiencing any of the signs above, it’s important to consult your dentist for assessment and early intervention.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Occlusal Splints (Night Guards)</h2>
                                <p>
                                    An occlusal splint—also known as a night guard, bite splint, or dental sleep guard—is a custom-made appliance that fits over your upper or lower teeth to protect them from damage caused by grinding and clenching.
                                </p>
                                <h3>Benefits of Occlusal Splints:</h3>
                                <ul>
                                    <li>Protects teeth from wear, chips, and fractures</li>
                                    <li>Reduces jaw and facial muscle tension</li>
                                    <li>Minimises pressure on the TMJ (jaw joint)</li>
                                    <li>Helps relieve headaches and morning jaw soreness</li>
                                </ul>
                                <h3>What to Expect:</h3>
                                <p>
                                    An occlusal splint is made from durable plastic and custom-fitted to your mouth. It’s typically worn at night and does not interfere with breathing. While it doesn’t stop the grinding itself, it acts as a protective barrier and significantly reduces the harmful effects.
                                </p>
                                <h3>Caring for Your Occlusal Splint:</h3>
                                <ul>
                                    <li>Rinse and gently clean with a spare toothbrush and mild soap after each use</li>
                                    <li>Store in a dry, ventilated container when not in use</li>
                                    <li>Bring it to your dental appointments for review</li>
                                    <li>Replace if it becomes worn, warped, or no longer fits properly</li>
                                    <li>If you've had recent dental work, such as a crown or bridge, your splint may need to be adjusted or remade to ensure a proper fit</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Mandibular Advancement Devices (MADs)</h2>
                                <p>
                                    For patients with mild to moderate obstructive sleep apnoea (OSA) or loud snoring, a mandibular advancement device (MAD) may be recommended. This custom oral appliance is designed to gently reposition your lower jaw (mandible) forward during sleep, increasing space in the airway and reducing obstruction.
                                </p>
                                <h3>How MADs Work:</h3>
                                <ul>
                                    <li>Pull the lower jaw and tongue forward</li>
                                    <li>Open the airway at the back of the throat</li>
                                    <li>Reduce snoring and apnoea events</li>
                                    <li>Promote deeper, more restful sleep</li>
                                </ul>
                                <h3>Features of MADs:</h3>
                                <ul>
                                    <li>Custom-fitted for comfort and effectiveness</li>
                                    <li>Usually come in two parts (top and bottom trays)</li>
                                    <li>Connected by adjustable screws, hinges, or elastic bands to control jaw movement</li>
                                    <li>Designed to be worn nightly</li>
                                </ul>
                                <p>
                                    MADs vary in size, firmness, and design, and your dentist will recommend the best option based on your specific needs. If sleep apnoea is suspected, you may be referred to a sleep physician for formal diagnosis and sleep testing.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Is a Sleep Appliance Right for You?</h2>
                                <p>Sleep-related dental appliances may be the right choice if you:</p>
                                <ul>
                                    <li>Grind or clench your teeth during sleep</li>
                                    <li>Experience jaw pain, headaches, or worn-down teeth</li>
                                    <li>Have been diagnosed with or show signs of mild to moderate sleep apnoea</li>
                                    <li>Snore loudly or wake up feeling tired despite a full night's sleep</li>
                                </ul>
                            </div>

                            <ServiceBooking 
                                title={"Start Sleeping Better & Protecting Your Smile"}
                                content={"If you suspect bruxism or sleep apnoea is affecting your health and comfort, don’t wait. At Pristine Smiles, we’ll assess your symptoms, discuss your options, and create a custom-made dental appliance tailored to your needs. Book your consultation today to take the first step toward better sleep, less pain, and healthier teeth."}
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

export default SleepApneaMouthguard;
