import "./index.css"
import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import PriceListButton from "../../Components/PriceListButton";
import Carousel from "../../Components/Carousel";
import imageList from "../../utils/carouselImages";
import SpecialOffersCarousel from "../../Components/SpecialOffersCarousel";
import offersList from "../../utils/specialOffers";

function Payments() {
    return (
        <div className="payments-screen">
            <div className="payments-container">
                <Header />
                <div className="payments-content">
                    <div className="screen-title">
                        <p>Payments</p>
                    </div>
                    <section className="payments-landing">
                        <p className="payments-intro">
                            <b>We believe everyone deserves access to quality dental care. At Pristine Smiles, to make treatments more affordable and stress-free, we offer flexible payment options and interest-free payment plans:</b>
                        </p>
                        <div className="payments-tiles">
                            {/* Payment Options Tile */}
                            <div className="payment-tile">
                                <h3>Payment Options</h3>
                                <p>Choose from a range of convenient payment methods for fast health fund claiming.</p>
                                <a href="/payment-options" className="tile-link">Learn More →</a>
                            </div>

                            {/* Payment Plans Tile */}
                            <div className="payment-tile">
                                <h3>Payment Plans</h3>
                                <p>Spread the cost of your dental treatment with interest-free payment plans tailored to your budget and lifestyle.</p>
                                <a href="/payment-plans" className="tile-link">Learn More →</a>
                            </div>
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

export default Payments;
