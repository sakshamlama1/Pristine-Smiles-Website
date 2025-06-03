import "./index.css"
import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import FAQComponent from "../../../../Components/FAQComponent";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";

const smileRightFaqsArray = [
    {
      question: "How much will it cost?",
      answer: (
        <>
            <p>
                The dental treatment required is specific to individual needs. 
                To give an accurate idea of cost, we need to better understand your current oral health and make a tailored treatment plan to suit your condition.
            </p>
            <p>
                In order to do so, you will need an appointment with one of our dentists. 
                During your appointment, your dentist will examine your mouth and talk about your specific goals and needs. 
                From here, your dentist will be able to provide you with a treatment plan and the costs involved.
            </p>
        </>
      )
    },
    {
      question: "What is the first step?",
      answer: (
        <>
          <p>The first step is to book an appointment. <a href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1">Click here to book online.</a></p>
        </>
      )
    },
    {
      question: "How long does the approval process take?",
      answer: (
        <>
          <p>
            Depending on what finance option you chose, you may find out the outcome of your application straight away after applying. 
            The process is simple and quick and that means that you can start your dental treatment straight away. 
            If you choose to use one of the finance options, your application must be approved before commencing dental treatment.
          </p>
        </>
      )
    }
];

function SmileRight() {
    return (
        <div className="payment-options-screen">
            <div className="payment-options-container">
                <Header />
                <div className="payment-options-content">
                    <div className="screen-title">
                        <p>SMILE RIGHT</p>
                    </div>
                    <div className="smile-right-text">
                        <div className="smile-right-section">
                            <h2>Smile Right (Payment Plans and Finance Options)</h2>
                            <ul>
                                <li>Available for treatment with out of pocket expenses over $1000.</li>
                                <li>Deposit required.</li>
                                <li>Weekly, fortnightly and monthly repayments.</li>
                                <li>Easy direct debit regular installments.</li>
                                <li>Ease your cash flow.</li>
                                <li>Fast application process.</li>
                            </ul>
                            <p>If you are unsure as to how much your dental treatments would cost, please contact our practice to obtain an exact price that is specific for you.</p>
                        </div>
                        <FAQComponent  faqs={smileRightFaqsArray}/>
                    </div>
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

export default SmileRight;