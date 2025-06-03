import "./index.css";
import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import PriceListButton from "../../Components/PriceListButton";
import Carousel from "../../Components/Carousel";
import imageList from "../../utils/carouselImages";
import SpecialOffersCarousel from "../../Components/SpecialOffersCarousel";
import offersList from "../../utils/specialOffers";

function Services() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>Services</p>
                    </div>
                    <section className="services-landing">
                        <p className="services-intro-description">
                           <b>At Pristine Dental, we provide a wide range of dental care options tailored to every age and need from routine check-ups to complete smile makeovers:</b> 
                        </p>
                        <div className="services-tiles">
                            {/* General Dentistry Tile */}
                            <div className="service-tile">
                                <h3>General Dentistry</h3>
                                <p>Comprehensive dental care focused on oral hygiene, prevention, and treatment of dental diseases for the whole family.</p>
                                <a href="/services/general" className="tile-link">Learn More →</a>
                            </div>

                            {/* Cosmetic Dentistry Tile */}
                            <div className="service-tile">
                                <h3>Cosmetic Dentistry</h3>
                                <p>Enhance your smile with modern cosmetic treatments—from teeth whitening to Invisalign and veneers.</p>
                                <a href="/services/cosmetic" className="tile-link">Learn More →</a>
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
export default Services;