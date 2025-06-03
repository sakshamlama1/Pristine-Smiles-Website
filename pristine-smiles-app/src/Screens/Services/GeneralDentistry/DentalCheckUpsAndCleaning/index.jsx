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
import DentalCheckUpsVideo from "../../../../assets/videos/DentalCheckUps.mp4";

function DentalCheckUpsAndCleaning() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTAL CHECK-UPS AND CLEANING</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={DentalCheckUpsVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>Regular Check-Ups</h2>
                                    <p>
                                        During a <b>routine dental examination</b>, our dentist will:
                                    </p>
                                    <ul>
                                        <li>Check for early signs of <b>decay</b> or <b>cracks</b> in the teeth.</li>
                                        <li>Inspect existing <b>restorations</b> to ensure they’re still intact.</li>
                                        <li>Evaluate the <b>gums</b> for any early signs of <b>gum disease</b>.</li>
                                        <li>Examine your <b>tongue</b>, <b>throat</b>, <b>cheeks</b>, and <b>lips</b> for signs of <b>oral cancer</b>.</li>
                                        <li>Look for signs of <b>teeth grinding</b> and any associated <b>damage</b>.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="services-section">
                                <p>
                                    We typically take <b>X-rays</b> every two years, unless we see a problem that requires closer inspection. In some <b>higher-risk cases</b>, X-rays might be necessary more often. Our <b>digital X-rays</b> are safe and expose you to <b>minimal radiation</b>.
                                </p>

                                <p>
                                    Additionally, we use an <b>OPG (Orthopantomogram)</b> to get a general overview of your mouth and hard-to-reach areas. This helps us spot:
                                </p>
                                <ul>
                                    <li>Changes in <b>bone structure</b> that could indicate <b>periodontal disease</b>.</li>
                                    <li>All teeth from <b>crown to root</b>, to check for <b>abscesses</b>, <b>fractures</b>, <b>impacted wisdom teeth</b>, or <b>ill-fitting restorations</b>.</li>
                                </ul>
                            </div>
                
                            <div className="services-section">
                                <h2>Dental Hygiene and Preventive Care</h2>
                                <p>
                                    Regular dental check-ups are essential for maintaining <b>good oral hygiene</b> and <b>healthy teeth and gums</b>. At Pristine Smiles, we provide advice on:
                                </p>
                                <ul>
                                    <li><b>Toothbrushes</b> and <b>electronic aids</b> for cleaning.</li>
                                    <li><b>Dental floss</b> and <b>inter-dental brushes</b> to clean between teeth.</li>
                                </ul>

                                <p>Signs of <b>poor oral hygiene</b> include:</p>
                                <ul>
                                    <li><b>Bleeding gums</b></li>
                                    <li><b>Swollen</b> or <b>inflamed gums</b></li>
                                    <li><b>Loose teeth</b></li>
                                    <li><b>Receding gums</b></li>
                                    <li><b>Bad breath</b></li>
                                </ul>

                                <p>
                                    <b>Good oral hygiene reduces</b> your risk of <b>serious health issues</b>, such as <b>gum disease</b>, and can prevent other medical conditions, including:
                                </p>
                                <ul>
                                    <li><b>Cardiovascular disease</b> (increased risk of stroke and heart attack).</li>
                                    <li><b>Premature birth</b> and <b>low birth weight</b> in babies.</li>
                                </ul>
                            </div>
                            <ServiceBooking
                                title={"A Cleaner, Brighter Smile Starts Here"}
                                content={"Routine check-ups and cleanings are your best defense against dental issues. Book your routine care appointment with us today!"}
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

export default DentalCheckUpsAndCleaning;
