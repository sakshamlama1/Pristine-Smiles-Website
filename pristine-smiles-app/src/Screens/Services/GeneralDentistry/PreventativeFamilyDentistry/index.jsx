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
import PreventativeFamilyDentistryVideo from "../../../../assets/videos/PreventativeFamilyDentistry.mp4";

function PreventativeFamilyDentistry() {
    return (
        <div className="services-screen">
            <div className="services-container">
                <Header />
                <div className="services-content">
                    <div className="screen-title">
                        <p>PREVENTATIVE & FAMILY DENTISTRY</p>
                    </div>
                    <section className="services-landing">
                        <div className="services-intro">
                            <div className="services-section services-split">
                                <div className="services-media-left">
                                    <ServiceSection video={PreventativeFamilyDentistryVideo} />
                                </div>
                                <div className="services-media-right">
                                    <h2>
                                        Healthy Smiles Start Here – For Every Member of the Family
                                    </h2>
                                    <p>
                                        At Pristine Smiles, we believe that <b>prevention</b> is the key to lifelong dental health. Our goal is to help patients of all ages enjoy strong, healthy smiles through regular checkups, cleanings, and personalized care plans.
                                    </p>
                                </div>
                            </div>

                            <div className="services-section">
                                <h2>What Is Preventative Dentistry?</h2>
                                <p>
                                    Preventative dentistry focuses on keeping your teeth and gums healthy through <b>proactive care</b>. This includes regular 6-monthly dental checkups, cleanings, fluoride treatments, sealants, and education about daily oral hygiene.
                                </p>
                                <p>
                                    By catching potential issues early, we can help you <b>avoid more serious and costly treatments</b> in the future.
                                </p>
                            </div>

                            <div className="services-section">
                                <h2>Services We Offer:</h2>
                                <ul>
                                    <li><b>Routine Exams & Cleanings:</b> Comprehensive exams and professional cleanings to maintain healthy teeth and gums.</li>
                                    <li><b>Digital X-Rays & Imaging:</b> Safe, low-radiation imaging to detect problems early and plan treatments accurately.</li>
                                    <li><b>Fluoride Treatments:</b> Strengthens enamel and helps protect against tooth decay, especially in children.</li>
                                    <li><b>Dental Sealants:</b> A protective coating applied to molars to help prevent cavities in hard-to-reach areas.</li>
                                    <li><b>Oral Cancer Checks:</b> Early detection saves lives — we can organise referrals if needed.</li>
                                    <li><b>Gum Disease Prevention:</b> We monitor and treat early signs of gingivitis and periodontal disease to keep your gums healthy.</li>
                                    <li><b>Education & Advice:</b> From brushing techniques to nutrition tips, we empower your family with knowledge to care for their smiles at home.</li>
                                </ul>
                            </div>

                            <div className="services-section">
                                <h2>Caring for Smiles at Every Age</h2>
                                <p>
                                    Whether it’s a toddler’s first visit, a teen needing orthodontic advice, or a senior managing restorative work, our team adapts to each patient’s unique needs. We make dental visits <b>stress-free and even fun</b> — laying the foundation for a lifetime of great oral health.
                                </p>
                                <p>
                                    <b>Your family’s health is our top priority.</b> Let us help you stay ahead of dental issues and enjoy a lifetime of confident smiles.
                                </p>
                            </div>

                            <ServiceBooking 
                                title={"Healthy Habits Start with Prevention"}
                                content={"Protect your family’s oral health with regular exams, cleanings, and expert care. Schedule a family-friendly dental visit now."}
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

export default PreventativeFamilyDentistry;
