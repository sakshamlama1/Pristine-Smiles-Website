import "./index.css";
import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import FAQComponent from "../../Components/FAQComponent";
import { NavLink } from "react-router-dom";

const faqsArray = [
    {
        question: "How often should I visit my dentist?",
        answer: (
            <>
              Regular six month <NavLink to="/services" className="faq-link">dental visits</NavLink> are recommended and will assist in detection of problems at early stage and also maintaining good oral hygiene and health.
            </>
        )
    },
    {
        question: "How often should I brush and floss?",
        answer: "It is very important that you brush twice a day. Once in the morning after you have had breakfast and again at night, before you go to sleep. We recommend that you use a soft bristle toothbrush and brush at a 45 degree angle to the gums. Flossing should be done once a day as it is just as important as brushing. Flossing removes trapped food from in between your teeth where your brush canʼt reach."
    },
    {
        question: "Why do I need x-rays taken?",
        answer: "Dental radiographs, also known as x-rays are a vital diagnostic tool in dentistry. It greatly increases the chances of detecting early decay and abnormalities while also showing the general condition of teeth and its roots."
    },
    {
        question: "What causes a toothache?",
        answer: "There are several reasons for a tooth to start aching. These include but not limited to: A crack in the tooth, abscess, a dental cavity, exposed nerve in a tooth or an exposed root. Gum disease can also be a reason for a tooth to begin aching."
    },
    {
        question: "What causes bad breath?",
        answer: "There are many factors which contribute to the cause of bad breath. Bad breath is commonly caused by a bacteria that live within the surface of the tongue and in the throat. Other causes include but not limited: Smoking, dry mouth, periodontal/gum disease, nasal or sinus infections. Treatment for bad breath depends on the underlying cause of the problem. Good oral hygiene, including brushing, flossing and tongue cleaning is important."
    },
    {
        question: "Why do my gums bleed?",
        answer: "Bleeding gums can be a sign of gingivitis or gum disease. Your gums should be a healthy pink colour. You should make an appointment to visit us so that we can assess your particular situation."
    },
    {
        question: "Are electric toothbrushes better than manual brushes?",
        answer: "Correct technique is more important than the type of toothbrush you use. Using a manual toothbrush with the correct technique can be just as good as the electric version. With electric brushes the technique is not quite as critical."
    },
    {
        question: "Should I have teeth whitening before or after I have my teeth restored or replaced?",
        answer: (
            <>
              If you are considering <NavLink to="/services/cosmetic/teeth-whitening" className="faq-link">teeth whitening</NavLink>, then you should discuss this with us before we proceed with any restorative or major dental work. Whitening should be carried out first, so the artificial tooth or filling can be matched to the shade your teeth will be after your whitening procedure.
            </>
        )
    },
    {
        question: "Why teeth crack even after taking good care of them?",
        answer: (
            <>
                <p>A cracked tooth can be caused by chewing or biting hard objects. You are more prone if you already have a heavily filled tooth. Old amalgam fillings predispose teeth to cracking. A tooth filled with amalgam stands a much higher chance of cracking than an unfilled tooth or a tooth filled with modern resin or ceramic materials.</p>
                <p>For more information on any aspect of dentistry, please speak to our friendly team.</p>
                <p>Our Mt Colah practice is located at 599 Pacific Hwy, Mount Colah NSW 2079. You can contact us on <a href="tel:0294761418" className="faq-link">(02) 9476 1418</a>.</p>
            </>
        )
    }
];

function FAQ() {
    return (
        <div className="faq-screen">
            <div className="faq-container">
                <Header />
                <div className="faq-content">
                    <div className="screen-title">
                        <p>FAQs</p>
                    </div>
                    <div className="faq-component">
                        <FAQComponent faqs={faqsArray} />
                    </div>
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;
