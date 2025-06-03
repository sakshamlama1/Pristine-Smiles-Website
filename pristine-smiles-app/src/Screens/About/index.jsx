import "./index.css";
import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import AboutImage from "../../assets/about-image.png";
import Team from "../../Components/Team";

function About() {
    return (
        <div className="about-screen">
            <Header />
            <main className="about-container">
                <section className="screen-title">
                    <p>ABOUT US</p>
                </section>

                <section className="about-intro">
                    <div className="about-left">
                        <img src={AboutImage} alt="About Pristine Smiles" />
                    </div>
                    <div className="about-right">
                        <h2 className="section-heading">Who we are</h2>
                        <p>
                            Since opening our first surgery in 2010, we’ve believed everyone deserves good dental care. We work hand-in-hand with patients to achieve healthy, beautiful smiles.
                        </p>
                        <p>
                            We provide detailed information so patients can make informed decisions about their oral health. We take pride in delivering quality care — and nothing gives us more joy than seeing our patients leave with confident, healthy smiles.
                        </p>
                        <p>
                            At Pristine Smiles, we strive to make every visit a positive experience, offering gentle, professional dental care in a calm, welcoming environment. If you’re anxious about dental visits, let us know — we’re here to help.
                        </p>
                    </div>
                </section>

                <section className="what-we-do">
                    <h2 className="section-sub-heading">What we do</h2>
                    <ul>
                        <li>Spend time listening to those we serve.</li>
                        <li>Earn patient trust and build professional relationships.</li>
                        <li>Treat everyone with compassion and respect.</li>
                        <li>Provide tailored treatment for individual needs.</li>
                        <li>Create strong, healthy teeth and beautiful smiles!</li>
                        <li>Encourage feedback and continuously improve.</li>
                    </ul>
                </section>

                <section className="what-makes-us-different">
                    <h2 className="section-sub-heading">What makes us different</h2>
                    <p>
                        We stay on the cutting edge of modern dentistry while building personal connections with our patients. We’re here to provide solutions that suit you — whenever you need us.
                    </p>
                </section>

                <div className="carousel-content" id='smiles-carousel'>
                    <div className="carousel-overlay">
                        <div className="carousel-text-container">
                            <h2>Meet Our Team</h2>
                            <p>Experienced, caring, and committed to providing exceptional dental care every step of the way.</p>
                        </div>
                    </div>
                </div>
                <Team />
                <GetInTouch />
            </main>
            <Footer />
        </div>
    );
}

export default About;
