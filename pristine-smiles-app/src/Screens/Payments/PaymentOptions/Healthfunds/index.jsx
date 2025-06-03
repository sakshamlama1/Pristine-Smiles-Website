import "./index.css";
import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import hfLogosList from "../../../../utils/healthFundsImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";

function HealthFunds() {
    return (
        <div className="payment-options-screen">
            <div className="payment-options-container">
                <Header />
                <div className="payment-options-content">
                    <div className="screen-title">
                        <p>HEALTH FUNDS</p>
                    </div>
                    <div className="healthfunds-information">
                        <div className="healthfunds-left">
                            {hfLogosList.map((logo, index) => (
                                <img key={index} src={logo} alt={`Health Fund ${index + 1}`} className="healthfund-logo" />
                            ))}
                        </div>

                        <div className="healthfunds-right">
                            <h2>We Welcome All Health Fund Members</h2>
                            <p>
                                We welcome members of all private health funds for treatment. With our HICAPS terminal linked to over 46 private health funds, you can claim your benefits instantly with a swipe of your health fund card.
                            </p>
                            <p>
                                For health funds participating in the HICAPS electronic claims system, we can process your rebate on the spot and only the “gap” payment is required at time of treatment.
                            </p>
                            <h2>
                                We are preferred providers for
                            </h2>
                            <ul>
                                <li>NIB</li>
                                <li>HCF</li>
                                <li>CBHS</li>
                                <li>Medibank <span style={{ fontStyle: "italic" }}>(except Newcastle Practice)</span></li>
                            </ul>
                            <p>
                                We accept all health fund cards that participate with HICAPS online claiming – including those displayed.
                            </p>
                        </div>
                    </div>
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

export default HealthFunds;
