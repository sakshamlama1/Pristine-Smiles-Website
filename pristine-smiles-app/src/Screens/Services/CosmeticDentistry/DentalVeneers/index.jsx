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
import DentalVeneersVideo from "../../../../assets/videos/DentalVeneers.mp4";

function DentalVeneers() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTAL VENEERS</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={DentalVeneersVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Enhance Your Smile with Natural-Looking Results</h2>
                                    <p>
                                        If you're looking to improve the appearance of your smile, <b>dental veneers</b> may be the ideal solution. Veneers are <b>thin, custom-made shells</b> designed to cover the front surface of your teeth, enhancing their shape, colour, and alignment for a more confident, radiant smile.
                                    </p>
                                </div>
                            </div>
                            <div className="services-section">
                                <h2>What Are Dental Veneers?</h2>
                                <p>
                                    A dental veneer is a slim layer of either <b>porcelain</b> or <b>composite resin</b> that is bonded to the front of a tooth. Veneers are matched to your natural tooth colour and shape to blend seamlessly with your smile. They are a popular cosmetic treatment because they require <b>minimal or sometimes no removal of your natural tooth structure</b>.
                                </p>
                                <p>Veneers can be used to improve the appearance of teeth that are:</p>
                                <ul>
                                    <li>Stained or discoloured</li>
                                    <li>Chipped, worn, or broken</li>
                                    <li>Slightly crooked or uneven</li>
                                    <li>Spaced with minor gaps between them</li>
                                    <li>Shaped differently (e.g., peg-shaped lateral incisors)</li>
                                </ul>
                                <p>
                                    Depending on your goals, veneers may be placed on a single tooth or across multiple teeth for a more complete smile makeover.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Ceramic Porcelain Veneers</h2>
                                <p>
                                    Porcelain veneers are crafted in a dental laboratory by a skilled technician. They are known for their <b>strength, durability, and natural appearance</b>. The process usually involves two appointments:
                                </p>
                                <ul>
                                    <li>
                                        <b>Initial Visit:</b> Your dentist will prepare your teeth, take impressions or a 3D scan, and select a shade that matches your natural teeth.
                                    </li>
                                    <li>
                                        <b>Second Visit:</b> Once the custom veneers are ready, they are bonded securely to your teeth using a strong dental adhesive.
                                    </li>
                                </ul>
                                <p>
                                    Porcelain veneers are <b>highly resistant to staining</b> and can last many years with proper care.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Caring for Your Veneers at Home</h2>
                                <p>Looking after your veneers is much like caring for your natural teeth. To keep them in great condition:</p>
                                <ul>
                                    <li>Brush twice daily with a soft-bristled toothbrush and fluoride toothpaste</li>
                                    <li>Floss once a day to remove plaque and food debris</li>
                                    <li>Avoid biting hard items (e.g., pens, ice, fingernails) to prevent chipping</li>
                                    <li>Limit foods and drinks that cause staining, especially with composite veneers</li>
                                    <li>Visit your dentist regularly for check-ups and professional cleans</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Will I Need Further Treatment?</h2>
                                <p>While veneers are a long-term solution, they are not permanent. It's important to understand that:</p>
                                <ul>
                                    <li>Teeth with veneers can still develop tooth decay if not properly cleaned</li>
                                    <li>Veneers may chip, wear, or become discoloured over time and may need replacement</li>
                                    <li>Changes in surrounding teeth may cause veneers to look less uniform in colour or shape</li>
                                    <li>Future dental treatments may still be needed on the veneered tooth or neighbouring teeth</li>
                                </ul>
                                <p>
                                    Your dentist will provide <b>personalised advice</b> on how to maintain your veneers and when replacements might be necessary.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Is This Treatment Right for You?</h2>
                                <p>
                                    Dental veneers can transform your smile, but they’re not suitable for everyone. If you’re considering veneers, we’ll carefully assess:
                                </p>
                                <ul>
                                    <li>Your oral health and hygiene habits</li>
                                    <li>The condition and alignment of your teeth</li>
                                    <li>Your cosmetic goals and budget</li>
                                </ul>
                                <p>
                                    We’ll discuss all your options in detail and help you choose the treatment that best suits your needs and expectations.
                                </p>
                            </div>

                            <ServiceBooking 
                                title={"Book Your Dental Veneer Consultation Today"}
                                content={"At Pristine Smiles, we’re here to help you achieve the smile you’ve always wanted. If you're ready to explore how veneers can enhance your appearance and boost your confidence, book your consultation with our friendly team today."}
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

export default DentalVeneers;
