import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import GetInTouch from "../../../Components/GetInTouch";
import PriceListButton from "../../../Components/PriceListButton";
import Carousel from "../../../Components/Carousel";
import imageList from "../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../Components/SpecialOffersCarousel";
import offersList from "../../../utils/specialOffers";

function PaymentPlans() {
    return (
        <div className="payment-plans-screen">
            <div className="payment-options-container">
                <Header />
                <div className="payment-options-content">
                    <div className="screen-title">
                        <p>PAYMENT PLANS</p>
                    </div>
                    <section className="payments-landing">
                        <div className="payments-intro">
                            <div className="payments-section">
                                <h2>Get Dental Treatment Now and Pay it Later</h2>
                                <p>
                                    Our interest-free dental payment plans give you the freedom to have the dental treatment you need while managing the payment of your treatment with easy regular payments!
                                </p>
                                <p>
                                    Interest Free* helps you to get dental treatment now rather than delaying and making dental condition worse and in turn costing even more.
                                </p>
                                <p>
                                    Your payments will be made in installments meaning it won’t affect your cash flow in one hit. Interest Free* finance gives you and your family ease and flexibility.
                                </p>
                                <p>
                                    No matter what cycle of life you are going through, you deserve the best dental care.
                                </p>
                            </div>
                            <div className="payments-section">
                                <h2>Eligibility</h2>
                                <p>To be eligible for Interest Free* payment options you need to comply with the below:</p>
                                <ul>
                                    <li>18+ years old.</li>
                                    <li>Permanent Australian Resident.</li>
                                    <li>Clear Credit History.</li>
                                    <li>Earn $20000+ Per Annum</li>
                                </ul>
                            </div>
                        </div>
                        <div className="payments-tiles">
                            {/* Afterpay */}
                            <div className="payment-tile">
                                <h3>Afterpay</h3>
                                <p>Enjoy your dental treatment now and pay later in four easy, interest-free fortnightly installments.</p>
                                <a href="/payment-plans/afterpay" className="tile-link">Learn More →</a>
                            </div>

                            {/* HUMM */}
                            <div className="payment-tile">
                                <h3>HUMM</h3>
                                <p>Finance your dental treatments over time with HUMM's flexible interest-free repayment options.</p>
                                <a href="/payment-plans/humm" className="tile-link">Learn More →</a>
                            </div>

                            {/* Smile Right */}
                            <div className="payment-tile">
                                <h3>Smile Right</h3>
                                <p>Tailored dental payment plans with Smile Right—designed to make your smile transformation more manageable.</p>
                                <a href="/payment-plans/smile-right" className="tile-link">Learn More →</a>
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

export default PaymentPlans;
