import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import GetInTouch from "../../../Components/GetInTouch";
import PriceListButton from "../../../Components/PriceListButton";
import Carousel from "../../../Components/Carousel";
import imageList from "../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../Components/SpecialOffersCarousel";
import offersList from "../../../utils/specialOffers";

function PaymentOptions() {
    return (
        <div className="payment-options-screen">
            <div className="payment-options-container">
                <Header />
                <div className="payment-options-content">
                    <div className="screen-title">
                        <p>PAYMENT OPTIONS</p>
                    </div>
                    <section className="payments-landing">
                        <p className="payments-intro">
                            At Pristine Smiles, we believe quality dental care should be accessible to everyone. That’s why we offer a range of <b>flexible payment options</b> — from <b>everyday health cover support</b> to <b>government-funded programs</b> — to help make your visits as affordable as they are stress-free.
                        </p>
                        <p><b></b></p>
                        <div className="payments-tiles">
                            {/* Child Dental Benefit Schedule */}
                            <div className="payment-tile">
                                <h3>Child Dental Benefit Schedule</h3>
                                <p>Bulk-billed dental services for eligible children under Medicare's Child Dental Benefits Schedule (CDBS).</p>
                                <NavLink to="/payment-options/child-dental-benefit" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Veterans' Affairs */}
                            <div className="payment-tile">
                                <h3>Department of Veterans' Affairs</h3>
                                <p>We proudly accept Department of Veterans' Affairs (DVA) patients and provide covered dental care services.</p>
                                <NavLink to="/payment-options/veterans-affairs" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Health Funds */}
                            <div className="payment-tile">
                                <h3>Health Funds</h3>
                                <p>Claim on the spot with HICAPS for all major health funds, making your visit quick and hassle-free.</p>
                                <NavLink to="/payment-options/healthfunds" className="tile-link">Learn More →</NavLink>
                            </div>                
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

export default PaymentOptions;
