import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";

function VeteransAffairs() {
    return (
        <div className="payment-options-screen">
            <div className="payment-options-container">
                <Header />
                <div className="payment-options-content">
                    <div className="screen-title">
                        <p>DEPARTMENT OF VETERANS' AFFAIRS</p>
                    </div>
                    <section className="payments-landing">
                        <div className="payments-intro">
                            <div className="payments-section">
                                <h2>DVA Dental Benefits – Eligibility</h2>
                                <p>
                                    <strong>Gold Card holders:</strong> Eligible for most dental treatments —
                                    fully covered if there's a clinical need.
                                </p>
                                <p>
                                    <strong>White Card holders:</strong> Covered only for dental issues related
                                    to their accepted disability.
                                </p>
                            </div>

                            <div className="payments-section">
                                <h2>What’s Covered</h2>
                                <p><strong>No prior approval needed for:</strong> Examinations, X-rays, fillings, dentures.</p>
                                <p><strong>Approval required for:</strong> Crowns, dental implants, surgical procedures.</p>
                            </div>

                            <div className="payments-section">
                                <h2>Annual Limits</h2>
                                <p>
                                    Many standard treatments have <strong>no annual cap</strong>, but some do.
                                    Your dentist can check what services are limited and your remaining balance.
                                </p>
                                <p><strong>Exempt from limits:</strong></p>
                                <ul>
                                    <li>Ex-prisoners of war.</li>
                                    <li>
                                        White Card holders with a related accepted disability or a malignant tumour affecting the teeth, mouth, or gums.
                                    </li>
                                </ul>
                            </div>

                            <div className="payments-section">
                                <h2>Need Help?</h2>
                                <ul>
                                    <li>
                                        <strong>Metro:</strong>{' '}
                                        <a href="tel:133254" className="tile-link">
                                            133 254
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Regional:</strong>{' '}
                                        <a href="tel:1800555254" className="tile-link">
                                            1800 555 254
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Email:</strong>{' '}
                                        <a href="mailto:generalenquiries@dva.gov.au" className="tile-link">
                                            generalenquiries@dva.gov.au
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    For more details, visit the{' '}
                                    <a
                                        href="https://www.dva.gov.au/health-and-treatment-care/dental-and-oral-health"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="tile-link"
                                    >
                                        DVA Dental Services page
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>
                    <Carousel images={imageList} />
                    <SpecialOffersCarousel offers={offersList} />
                    <PriceListButton />
                    <GetInTouch />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default VeteransAffairs;
