import React from "react";
import "./index.css";
import HeroImage from "../../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero">
        <div className="hero-left">
            <h1 className="clinic-name">Pristine Smiles</h1>
            <p className="tagline">
                With over 25 years of experience and a personal touch, Dr Pooja Lama are dedicated to providing quality quality General and Cosmetic Dentistry to local community.
            </p>
            <div className="cta-buttons">
                <a href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" className="btn-primary">Book Now</a>
                <a href="/services" className="btn-secondary">Our Services</a>
            </div>
        </div>
        <div className="hero-right">
            <img
                src={HeroImage}
                alt="Happy dental patient"
                className="hero-img"
            />
        </div>
    </section>
  );
}

export default Hero;
