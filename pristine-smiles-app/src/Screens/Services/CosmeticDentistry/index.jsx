import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import GetInTouch from "../../../Components/GetInTouch";
import PriceListButton from "../../../Components/PriceListButton";
import Carousel from "../../../Components/Carousel";
import imageList from "../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../Components/SpecialOffersCarousel";
import offersList from "../../../utils/specialOffers";

function CosmeticDentistry() {
    return (
        <div className="cosmetic-dentistry-screen">
            <div className="cosmetic-dentistry-container">
                <Header />
                <div className="cosmetic-dentistry-content">
                    <div className="screen-title">
                        <p>COSMETIC DENTISTRY</p>
                    </div>
                    <section className="services-landing">

                        <p className="services-intro-description">
                            <b>Cosmetic dentistry</b> offers an excellent way to improve not only the appearance of your smile but also your dental health. 
                            Treatments like <b>crowns</b>, <b>inlays</b>, and <b>onlays</b> not only enhance the look of your teeth but can also protect them, 
                            while other procedures like <b>teeth whitening</b> are purely aesthetic but can significantly boost self-confidence. 
                            During your consultation, our experienced dentists will help guide you toward the best treatment option based on the condition of 
                            your teeth and the smile you desire. Book your <a href="/">$75 Dream Design Consultation</a> today to explore your cosmetic dentistry options.
                            <br></br><br></br>
                            <b>At Pristine Smiles, we offer a wide range of cosmetic dental treatments, including:</b>
                        </p>
                        <div className="services-tiles">
                            {/* Composite Veneers / Bonding */}
                            <div className="service-tile">
                                <h3>Composite Veneers/Bonding</h3>
                                <p>Achieve a natural, polished smile by reshaping or repairing teeth with composite veneers in a single visit.</p>
                                <a href="/services/cosmetic/composite-veneers-bonding" className="tile-link">Learn More →</a>
                            </div>

                            {/* Veneers */}
                            <div className="service-tile">
                                <h3>Cosmetic Veneers</h3>
                                <p>Transform your smile with custom-made porcelain veneers that cover imperfections and deliver a flawless look.</p>
                                <a href="/services/cosmetic/cosmetic-veneers" className="tile-link">Learn More →</a>
                            </div>

                            {/* Invisalign */}
                            <div className="service-tile">
                                <h3>Invisalign</h3>
                                <p>Straighten your teeth discreetly with clear, removable aligners that fit seamlessly into your lifestyle.</p>
                                <a href="/services/cosmetic/invisalign" className="tile-link">Learn More →</a>
                            </div>

                            {/* Sleep Dentistry */}
                            <div className="service-tile">
                                <h3>Sleep Dentistry</h3>
                                <p>Relax during your dental treatments with safe and gentle sedation options tailored to your needs.</p>
                                <a href="/services/cosmetic/sleep-dentistry" className="tile-link">Learn More →</a>
                            </div>

                            {/* Teeth Whitening */}
                            <div className="service-tile">
                                <h3>Teeth Whitening</h3>
                                <p>Brighten your smile with professional whitening treatments that safely lift stains and boost confidence.</p>
                                <a href="/services/cosmetic/teeth-whitening" className="tile-link">Learn More →</a>
                            </div>
                        </div>
                    </section>
                    <Carousel images={imageList}/>
                    <SpecialOffersCarousel offers={offersList}/>
                    <PriceListButton />
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CosmeticDentistry;