import "./index.css"
import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import AfterPayImage from "../../../../assets/afterpay-image.png";
import AfterpayStepOne from "../../../../assets/afterpay-instructions/afterpay-instruction-1.png";
import AfterpayStepTwo from "../../../../assets/afterpay-instructions/afterpay-instruction-2.png";
import AfterpayStepThree from "../../../../assets/afterpay-instructions/afterpay-instruction-3.png";
import AfterpayStepFour from "../../../../assets/afterpay-instructions/afterpay-instruction-4.png";
import AfterpayDiscoverLogo from "../../../../assets/afterpay-discover.png";
import OnlineStore from "../../../../Components/OnlineStore";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";

function Afterpay() {
    return (
        <div className="payment-plans-screen">
            <div className="payment-plans-container">
                <Header />
                <div className="payment-plans-content">
                    <div className="screen-title">
                        <p>AFTERPAY</p>
                    </div>
                    <div className="afterpay-information">
                        <div className="afterpay-left">
                            <img
                                src={AfterPayImage}
                                alt="Afterpay Logo"
                                className="afterpay-logo"
                            />
                        </div>
                        <div className="afterpay-right">
                            <h2>Enjoy your smile now and pay for it later</h2>
                            <p>
                                Afterpay allows you to enjoy your smile now and pay for it in four equal
                                fortnightly payments. With Afterpay you can spread out the cost of your
                                treatment with no added interest, and no additional fees*.
                            </p>
                            <p>
                                Everyone deserves a healthy and beautiful smile and with Afterpay there’s
                                even more reason to show it off.
                            </p>
                            <p>
                                Usage is subject to Afterpay approval and transaction limits. Late fees may
                                apply if you fail to make a payment on time. For Afterpay’s terms please
                                visit: <a href="https://www.afterpay.com/en-AU/terms" target="_blank" rel="noopener noreferrer">Terms – Afterpay – Shop Now. Enjoy Now. Pay Later.</a>
                            </p>
                            <p>
                                <strong>Note:</strong> *Afterpay is only available at Pristine Smiles for
                                dental treatment under $1000. If you choose to use Afterpay, please ensure you
                                have applied and been approved before commencing dental treatment.
                            </p>
                        </div>
                    </div>
                    <div className="afterpay-instructions">
                        <h2>HOW DOES AFTERPAY WORK</h2>
                        <div className="afterpay-instructions-grid">
                            <div className="afterpay-step">
                                <img src={AfterpayStepOne} alt="Book Your Next Visit" className="afterpay-instruction-logo" />
                                <p><strong>Book Your Next Visit</strong><br />Book your next visit with your nearest Smilecraft Dental Practice</p>
                            </div>
                            <div className="afterpay-step">
                                <img src={AfterpayStepTwo} alt="Pay it in 4" className="afterpay-instruction-logo" />
                                <p><strong>Pay it in 4</strong><br />Pay for your dental visit in equal fortnightly payments</p>
                            </div>
                            <div className="afterpay-step">
                                <img src={AfterpayStepThree} alt="No Extra Payments" className="afterpay-instruction-logo" />
                                <p><strong>No Extra Payments</strong><br />If you pay on time, you’ll pay NO interest and NO additional fees*</p>
                            </div>
                            <div className="afterpay-step">
                                    <img src={AfterpayStepFour} alt="Enjoy your Smile" className="afterpay-instruction-logo" />
                                    <p><strong>Enjoy your Smile</strong><br />Get out and show off your smile!</p>
                            </div>
                        </div>
                        <div className="afterpay-discover">
                            <h3>DISCOVER</h3>
                            <img src={AfterpayDiscoverLogo} alt="Afterpay Discover" className="afterpay-discover-logo" />
                        </div>
                    </div>
                    <OnlineStore type={"Afterpay"} srcLink={"https://www.youtube.com/embed/MQOKS4yhCIs"}
                        appleLink={"https://apps.apple.com/au/developer/afterpay/id1221203041"} googleLink={"https://play.google.com/store/apps/details?id=com.afterpaymobile&pli=1"}/>
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

export default Afterpay;
