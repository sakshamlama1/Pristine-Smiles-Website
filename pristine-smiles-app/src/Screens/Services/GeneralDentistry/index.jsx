import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import GetInTouch from "../../../Components/GetInTouch";
import PriceListButton from "../../../Components/PriceListButton";
import Carousel from "../../../Components/Carousel";
import imageList from "../../../utils/carouselImages";
import SpecialOffersCarousel from "../../../Components/SpecialOffersCarousel";
import offersList from "../../../utils/specialOffers";

function GeneralDentistry() {
    return (
        <div className="general-dentistry-screen">
            <div className="general-dentistry-container">
                <Header />
                <div className="general-dentistry-content">
                    <div className="screen-title">
                        <p>GENERAL DENTISTRY</p>
                    </div>
                    <section className="services-landing">
                        <p className="services-intro-description">
                            At Pristine Smiles, we prioritize <b>general dental treatments</b> to help you maintain healthy teeth and gums. 
                            Our goal is to preserve your natural teeth as much as possible. Most people only need routine dental care, like fillings, which will need to 
                            be replaced from time to time. If a tooth is infected, <NavLink to="/services/general/root-canal-treatment">Root Canal Treatment</NavLink> can often save it, and 
                            there’s no need to fear it — we always ensure the process is gentle and comfortable. 
                            We also avoid tooth extractions unless absolutely necessary, including <NavLink to="/services/general/wisdom-teeth-removal">Wisdom Teeth Removal</NavLink>. 
                            <br /><br />
                            <b>At Pristine Smiles, we offer a wide range of general dental treatments, including:</b>
                        </p>
                        <div className="services-tiles">
                            {/* Dental Check Ups & Cleaning */}
                            <div className="service-tile">
                                <h3>Dental Check Ups & Cleaning</h3>
                                <p>Regular check-ups and professional cleaning to maintain optimal oral health and catch any issues early.</p>
                                <NavLink to="/services/general/dental-check-ups-cleaning" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Dental Fillings */}
                            <div className="service-tile">
                                <h3>Dental Fillings</h3>
                                <p>Repair cavities or minor fractures in your teeth using modern, safe, and aesthetic filling materials.</p>
                                <NavLink to="/services/general/dental-fillings" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Dental Bridge */}
                            <div className="service-tile">
                                <h3>Dental Bridge</h3>
                                <p>Restore your smile and bite by replacing missing teeth with a natural-looking dental bridge.</p>
                                <NavLink to="/services/general/dental-bridge" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Dental Crown */}
                            <div className="service-tile">
                                <h3>Dental Crown</h3>
                                <p>Protect damaged or weakened teeth with durable, custom-made dental crowns that match your smile.</p>
                                <NavLink to="/services/general/dental-crown" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Wisdom Teeth Removal */}
                            <div className="service-tile">
                                <h3>Wisdom Teeth Removal</h3>
                                <p>Gentle and effective extraction of problematic wisdom teeth to prevent pain and misalignment.</p>
                                <NavLink to="/services/general/wisdom-teeth-removal" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Root Canal Treatment */}
                            <div className="service-tile">
                                <h3>Root Canal Treatment</h3>
                                <p>Save an infected tooth with expert root canal therapy to relieve pain and restore function.</p>
                                <NavLink to="/services/general/root-canal-treatment" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Dentures */}
                            <div className="service-tile">
                                <h3>Dentures</h3>
                                <p>Comfortable and natural-looking dentures designed to restore function and confidence in your smile.</p>
                                <NavLink to="/services/general/dentures" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Mouth Guards */}
                            <div className="service-tile">
                                <h3>Mouth Guards</h3>
                                <p>Custom-fitted mouth guards to protect teeth from injury during sports or prevent grinding at night.</p>
                                <NavLink to="/services/general/mouth-guards" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Emergency Dentistry */}
                            <div className="service-tile">
                                <h3>Emergency Dentistry</h3>
                                <p>Prompt care for dental emergencies—relieving pain and addressing urgent dental issues fast.</p>
                                <NavLink to="/services/general/emergency-dentistry" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Dental Anxiety and Nervous Patients */}
                            <div className="service-tile">
                                <h3>Dental Anxiety & Nervous Patients</h3>
                                <p>We provide a calm, caring environment and gentle treatments tailored for anxious or nervous patients.</p>
                                <NavLink to="/services/general/dental-anxiety" className="tile-link">Learn More →</NavLink>
                            </div>

                            {/* Preventative & Family Dentistry */}
                            <div className="service-tile">
                                <h3>Preventative & Family Dentistry</h3>
                                <p>Prevent dental issues and keep the whole family smiling with tailored dental plans and advice.</p>
                                <NavLink to="/services/general/preventative-family-dentistry" className="tile-link">Learn More →</NavLink>
                            </div>
                        </div>
                    </section>
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

export default GeneralDentistry;
