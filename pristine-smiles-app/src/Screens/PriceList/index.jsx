import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PriceListForm from "../../Components/PriceListForm";
import Carousel from "../../Components/Carousel";
import imageList from "../../utils/carouselImages";
import SpecialOffersCarousel from "../../Components/SpecialOffersCarousel";
import offersList from "../../utils/specialOffers";

function PriceList() {
    return (
        <div className="price-list-screen">
            <div className="price-list-container">
                <Header />
                <div className="price-list-information">
                    <div className="screen-title">
                        <p>Price List</p>
                    </div>
                    <PriceListForm />
                    <Carousel images={imageList}/>
                    <SpecialOffersCarousel offers={offersList}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PriceList;
