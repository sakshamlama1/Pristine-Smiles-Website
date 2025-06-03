import "./index.css"
import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import OnlineStore from "../../../../Components/OnlineStore";
import HummStepOne from "../../../../assets/humm-instructions/humm-instructions-1.png";
import HummStepTwo from "../../../../assets/humm-instructions/humm-instructions-2.png";
import HummStepThree from "../../../../assets/humm-instructions/humm-instructions-3.png";
import HummLittleThings from "../../../../assets/humm-little-things.png";
import HummBigThings from "../../../../assets/humm-big-things.png";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";

function Humm() {
    return (
        <div className="payment-plans-screen">
            <div className="payment-plans-container">
                <Header />
                <div className="payment-plans-content">
                    <div className="screen-title">
                        <p>HUMM</p>
                    </div>
                    <div className="humm-info-section">
                        <p>
                            With humm you can Buy Now Pay Later, not just for little things, but for big ones as well.
                            Spend from $1 to $30,000 and repay over time, always interest free.
                        </p>
                        <div className="humm-things-component">
                            <img src={HummLittleThings} alt="Little Things" className="humm-things" />
                            <img src={HummBigThings} alt="Big Things" className="humm-things" />
                        </div>
                        <p>
                            A Bill Transaction Fee of $2 applies to all BPAY transactions and will be collected with the first payment. 
                            This fee will not apply to any other type of purchase.
                        </p>
                        <p>
                            Usage is subject to Humm approval and transaction limits. Late fees may apply if you fail to make a payment on time. 
                            For Humm’s terms and conditions, please visit: <a href="https://www.shophumm.com/au/important-information/" target="_blank" rel="noopener noreferrer">Humm – Important Information</a>.
                        </p>
                        <p>
                            <strong>Please Note:</strong> *Humm is only available at Smile Craft Dental for dental treatment where you have been pre-approved. 
                            If you choose to use Humm, please ensure you have applied and been approved before commencing dental treatment.
                        </p>
                    </div>
                    <div className="humm-instructions">
                        <h2>HOW DOES HUMM WORK</h2>
                        <div className="humm-instructions-grid">
                            <div className="humm-step">
                                <img src={HummStepOne} alt="Download the humm app" className="humm-instruction-logo" />
                            </div>
                            <div className="humm-step">
                                <img src={HummStepTwo} alt="Shop at any humm retailer" className="humm-instruction-logo" />
                            </div>
                            <div className="humm-step">
                                <img src={HummStepThree} alt="Checkout with humm //CARD" className="humm-instruction-logo" />
                            </div>
                        </div>
                        <div className="humm-anchor-buttons">
                            <a href="https://www.shophumm.com/au/faqs/am-i-eligible-for-humm/">CHECK YOUR ELIGIBILITY</a>
                            <a href="https://buyer.shophumm.com.au/registration/mobile?_gl=1*15ekzf7*_ga*MTAzMjc2MjUyMy4xNjQ5MDM2ODM3*_ga_D9EFD1MVNL*MTY1ODk5MDE2NC42LjEuMTY1ODk5MTI2OC4w&_ga=2.147415799.1947775212.1658990164-1032762523.1649036837">SIGN UP TODAY</a>
                        </div>
                    </div>
                    <OnlineStore type={"HUMM"} srcLink={"https://www.youtube.com/embed/jsd-Z-4o7Q0"}
                        appleLink={"https://apps.apple.com/au/app/humm/id1455391873"} googleLink={"https://play.google.com/store/apps/details?id=com.shophumm&hl=en_AU&gl=US"}/>
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

export default Humm;
