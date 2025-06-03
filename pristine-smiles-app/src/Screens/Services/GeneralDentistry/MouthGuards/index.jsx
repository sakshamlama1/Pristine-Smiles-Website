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
import MouthGuard from "../../../../assets/special-offers/offer-image-5.png";

function MouthGuards() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>MOUTH GUARDS</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <img src={MouthGuard} alt="MouthGuard"></img>
                                </div>
                                <div className="services-media-right">
                                    <p>
                                        A <b>Mouth Guard</b> is a protective device worn over the teeth to help prevent <b>injuries to the mouth, teeth, and jaw</b> — especially during physical activities or contact sports. It works by <b>absorbing and cushioning impacts</b>, reducing the risk of <b>broken teeth, gum cuts, or jaw fractures</b>.
                                    </p>
                                    <p>
                                        Mouthguards are especially important for sports like <b>football, rugby, basketball, or boxing</b>, where the risk of facial injury is high.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>🛡️ Types of Mouthguards</h2>
                                <ul>
                                    <li>
                                        <b>Custom-Fitted:</b> Created by a dentist or dental technician. These offer the best <b>protection and comfort</b>. Though more expensive, they can save you from costly injuries. <b>Dentists recommend these the most</b>.
                                    </li>
                                    <li>
                                        <b>Boil-and-Bite:</b> Softens in boiling water — you bite into it to mold it. Offers a <b>better fit than stock guards</b> but still not perfect. Needs replacing each season.
                                    </li>
                                    <li>
                                        <b>Stock:</b> Pre-made and ready to wear. These are the <b>cheapest</b> but also offer the <b>least protection</b>. Often <b>uncomfortable</b> and poorly fitting.
                                    </li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>🧼 How to Care for Your Mouth Guard?</h2>
                                <ul>
                                    <li>Rinse it with <b>soap and warm water</b> after each use.</li>
                                    <li>Occasionally <b>disinfect with mouthwash</b>.</li>
                                    <li><b>Store it</b> in a ventilated box to keep it dry and clean.</li>
                                    <li><b>Avoid heat and sunlight</b> to prevent warping or damage.</li>
                                    <li><b>Check it</b> before each use and during dental visits.</li>
                                    <p>
                                        <b>Replace if it’s damaged or worn:</b>
                                    </p>
                                    <ul>
                                        <li>Every <b>12–18 months</b> for kids</li>
                                        <li>After <b>dental treatment or tooth loss</b> for adults</li>
                                    </ul>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>⚠️ Safety Tips</h2>
                                <ul>
                                    <li>Always <b>wear it</b> during games and practices — even for non-contact sports if there’s a fall risk.</li>
                                    <li>If you <b>wear braces</b>, talk to your dentist about getting a <b>custom Mouth Guard</b>.</li>
                                    <li>If it feels <b>uncomfortable</b>, see your dentist for an adjustment or replacement.</li>
                                </ul>
                            </div>

                            <ServiceBooking 
                                title={"Protect Your Teeth the Smart Way"}
                                content={"A well-fitted Mouth Guard is one of the easiest ways to avoid serious dental injuries. Whether you’re playing sports recreationally or competitively, don’t take risks — invest in the right protection and keep your smile safe. Book your fitting today."}
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

export default MouthGuards;
