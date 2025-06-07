
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
                <a href="/Pristine-Smiles-Website"><img src={title} alt=""></img></a>
            </div>
            <div className='header-items'>   
                <div className="dropdown">
                    {/* Dropdown menu for services */}
                    <a href="#!" className="btn dropdown-toggle header-anchor" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        {/* Create a two-column layout for General and Cosmetic services */}
                        <div className="row">
                            {/* General Dentistry Column */}
                            <div className="col-6">
                                <li><a className="dropdown-item" id="dropdown-header" href="/services/general">General Dentistry</a></li>
                                <li><a className="dropdown-item" href="/services/general/children-dentistry">Children Dentistry</a></li>
                                <li><a className="dropdown-item" href="/services/general/dental-anxiety-nervous-patients">Dental Anxiety and Nervous Patients</a></li>
                                <li><a className="dropdown-item" href="/services/general/dental-bridge">Dental Bridge</a></li>
                                <li><a className="dropdown-item" href="/services/general/dental-check-ups-cleaning">Dental Check Ups & Cleaning</a></li>
                                <li><a className="dropdown-item" href="/services/general/dental-crown">Dental Crown</a></li>
                                <li><a className="dropdown-item" href="/services/general/dental-fillings">Dental Fillings</a></li>
                                <li><a className="dropdown-item" href="/services/general/dentures">Dentures</a></li>
                                <li><a className="dropdown-item" href="/services/general/emergency-dentistry">Emergency Dentistry</a></li>
                                <li><a className="dropdown-item" href="/services/general/mouth-guards">Mouth Guards</a></li>
                                <li><a className="dropdown-item" href="/services/general/preventative-family-dentistry">Preventative & Family Dentistry</a></li>
                                <li><a className="dropdown-item" href="/services/general/root-canal-treatment">Root Canal Treatment</a></li>
                                <li><a className="dropdown-item" href="/services/general/sleep-apnea-mouthguard">Sleep Apnea Mouthguard</a></li>
                                <li><a className="dropdown-item" href="/services/general/wisdom-teeth-removal">Wisdom Teeth Removal</a></li>
                            </div>

                            {/* Cosmetic Dentistry Column */}
                            <div className="col-6">
                                <li><a className="dropdown-item" id="dropdown-header"  href="/services/cosmetic">Cosmetic Dentistry</a></li>
                                <li><a className="dropdown-item" href="/services/cosmetic/composite-veneers-bonding">Composite Veneers/Bonding</a></li>
                                <li><a className="dropdown-item" href="/services/cosmetic/dental-veneers">Dental Veneers</a></li>
                                <li><a className="dropdown-item" href="/services/cosmetic/invisalign">Invisalign</a></li>
                                <li><a className="dropdown-item" href="/services/cosmetic/teeth-whitening">Teeth Whitening</a></li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    {/* Dropdown menu for payment options */}
                    <a href="#!" className="btn dropdown-toggle header-anchor" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                        Payments
                    </a>
                    <ul className="dropdown-menu">
                        {/* Dropdown items for different payment options */}
                        <div className="row">
                            <div className="col-6">
                                <li><a className="dropdown-item" id="dropdown-header" href="/payment-options">Payment Options</a></li>
                                <li><a className="dropdown-item" href="/payment-options/child-dental-benefit">Child Dental Benefit Schedule</a></li>
                                <li><a className="dropdown-item" href="/payment-options/veterans-affairs">Department of Veterans' Affairs</a></li>
                                <li><a className="dropdown-item" href="/payment-options/healthfunds">Healthfunds</a></li>
                            </div>
                            <div className="col-6">
                                <li><a className="dropdown-item" id="dropdown-header" href="/payment-plans">Payment Plans</a></li>
                                <li><a className="dropdown-item" href="/payment-plans/afterpay">Afterpay</a></li>
                                <li><a className="dropdown-item" href="/payment-plans/humm">HUMM</a></li>
                                <li><a className="dropdown-item" href="/payment-plans/smile-right">Smile Right</a></li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='header-buttons'>
                    <a href='/about-us' className='header-anchor'>About Us</a>
                </div> 
            </div>
            
            {/* Header buttons and hamburger in one flex container */}
            <div className="header-buttons-container">
                {/* The header-buttons will appear next to the hamburger button */}
                <div className='header-buttons'>
                    <CallUsButton />
                    <a id="booking-btn-id" className="navlink-r" href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1">
                        <button className='btn' id='secondary'>Book Now</button>  
                    </a>    
                </div>
                {/* Hamburger menu */}
                <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            {/* Mobile Menu: Show the links when menu is open */}
            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-buttons">
                        <NavLink id="menu-booking-btn-id" to="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" className="mobile-menu-anchor" onClick={() => setMenuOpen(false)}>Book Now</NavLink>
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