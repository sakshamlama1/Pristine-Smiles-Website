import React from "react";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import GetInTouch from "../../../../Components/GetInTouch";
import PriceListButton from "../../../../Components/PriceListButton";
import Carousel from "../../../../Components/Carousel";
import imageList from "../../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../../Components/SpecialOffersCarousel";
import offersList from "../../../../utils/specialOffers";
import ServiceBooking from "../../../../Components/ServiceBooking";
import ServiceSection from "../../../../Components/ServiceSection";
import DentalAnxietyNervousPatientsVideo from "../../../../assets/videos/DentalAnxietyNervousPatients.mp4"

function DentalAnxiety() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>DENTAL ANXIETY AND NERVOUS PATIENTS</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={DentalAnxietyNervousPatientsVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>You're Not Alone – We're Here to Help</h2> 
                                    <p>
                                        At Pristine Smiles, we understand that visiting the dentist can be <b>stressful</b> for many people. Dental anxiety is incredibly common — affecting patients of all ages. Whether your fear stems from a past experience, a fear of pain, or even the sounds and smells of a dental office, we’re here to help you feel <b>safe and supported</b>.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>What Is Dental Anxiety?</h2>
                                <p>
                                    Dental anxiety can range from <b>mild nervousness</b> to severe dental phobia that prevents people from receiving the care they need. Common signs include:
                                </p>
                                <ul>
                                    <li>Trouble sleeping before an appointment</li>
                                    <li>Feeling physically ill or panicked before a visit</li>
                                    <li>Avoiding the dentist altogether</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Our Approach to Anxious Patients</h2>
                                <p>We take your concerns seriously. Our team is trained to provide a <b>calm, friendly, and pressure-free</b> environment. Here's how we help ease dental anxiety:</p>
                                <ul>
                                    <li><b>Gentle, Compassionate Care:</b> We’ll take the time to explain every step and proceed at your pace.</li>
                                    <li><b>Open Communication:</b> We encourage you to ask questions and let us know how you're feeling.</li>
                                    <li>
                                        <b>Relaxation Techniques:</b> Breathing exercises, music, and calming distractions can help you stay relaxed. Our clinic has a television where you can sit back, relax and watch the screen. We also encourage patients to bring headphones or music if that helps them feel more comfortable.
                                    </li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Tips Before Your Appointment</h2>
                                <ul>
                                    <li>Bring a friend or family member to help you feel more comfortable.</li>
                                    <li>Schedule your visit at a time of day when you’re least likely to be rushed or stressed.</li>
                                    <li>Let us know about your anxiety when booking — we’ll adjust your appointment accordingly.</li>
                                </ul>
                            </div>
                            
                            <ServiceBooking 
                                title={"You Deserve Comfortable Dental Care"} 
                                content={"Our goal is to make every visit a positive experience. With a caring team, a welcoming environment, and options tailored to your needs, you can overcome your dental fears — one step at a time. Schedule a consultation today and let us know how we can support you."} 
                            />
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

export default DentalAnxiety;
