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
import Hero from "../../Components/Hero";
import Process from "../../Components/Process";
import IntroVideo from "../../Components/IntroVideo";

function LandingPage() {

    return (
        <div className="landing-page-screen">
            <div className="landing-page-container">
                <Header />
                <div className="landing-page-content">
                    <Hero />
                    <IntroVideo />
                    <Process />
                    <Carousel images={imageList} />
                    <SpecialOffersCarousel offers={offersList} />
                    <PriceListButton />
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default LandingPage;