import "./index.css";
import React, { useState } from "react";
import title from '../../assets/title.png';
import { NavLink } from "react-router-dom";
import CallUsButton from "../CallUsButton";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-component">
            <div className='head-title'>
                <NavLink to="/"><img src={title} alt="Pristine Smiles" /></NavLink>
            </div>

            <div className='header-items'>   
                <div className="dropdown">
                    <button className="btn dropdown-toggle header-anchor" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </button>
                    <ul className="dropdown-menu">
                        <div className="row">
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/services/general">General Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/children-dentistry">Children Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-anxiety-nervous-patients">Dental Anxiety and Nervous Patients</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-bridge">Dental Bridge</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-check-ups-cleaning">Dental Check Ups & Cleaning</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-crown">Dental Crown</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dental-fillings">Dental Fillings</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/dentures">Dentures</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/emergency-dentistry">Emergency Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/mouth-guards">Mouth Guards</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/preventative-family-dentistry">Preventative & Family Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/root-canal-treatment">Root Canal Treatment</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/sleep-apnea-mouthguard">Sleep Apnea Mouthguard</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/general/wisdom-teeth-removal">Wisdom Teeth Removal</NavLink></li>
                            </div>

                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/services/cosmetic">Cosmetic Dentistry</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/composite-veneers-bonding">Composite Veneers/Bonding</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/dental-veneers">Dental Veneers</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/invisalign">Invisalign</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/services/cosmetic/teeth-whitening">Teeth Whitening</NavLink></li>
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle header-anchor" data-bs-toggle="dropdown" aria-expanded="false">
                        Payments
                    </button>
                    <ul className="dropdown-menu">
                        <div className="row">
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/payment-options">Payment Options</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-options/child-dental-benefit">Child Dental Benefit Schedule</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-options/veterans-affairs">Department of Veterans' Affairs</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-options/healthfunds">Healthfunds</NavLink></li>
                            </div>
                            <div className="col-6">
                                <li><NavLink className="dropdown-item" id="dropdown-header" to="/payment-plans">Payment Plans</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-plans/afterpay">Afterpay</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-plans/humm">HUMM</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/payment-plans/smile-right">Smile Right</NavLink></li>
                            </div>
                        </div>
                    </ul>
                </div>

                <div className='header-buttons'>
                    <NavLink to="/about-us" className="header-anchor">About Us</NavLink>
                </div> 
            </div>
            
            <div className="header-buttons-container">
                <div className='header-buttons'>
                    <CallUsButton />
                    <a id="booking-btn-id" className="navlink-r" href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" target="_blank" rel="noopener noreferrer">
                        <button className='btn' id='secondary'>Book Now</button>  
                    </a>    
                </div>
                <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-buttons">
                        <a id="menu-booking-btn-id" className="mobile-menu-anchor" href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Book Now</a>
                        <NavLink to="/services" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Services</NavLink>
                        <NavLink to="/payments" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Payments</NavLink>
                        <NavLink to="/about-us" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
