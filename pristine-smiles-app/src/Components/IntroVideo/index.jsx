import React from 'react';
import './index.css';
import IntroVideoLink from '../../assets/videos/IntroVideo.mp4';

function IntroVideo() {
    return (
        <section className="clinic-intro-video">
            <div className="container">
                <h2 className="intro-video-heading">Welcome to Pristine Smiles</h2>
                <div className='intro-video-content'>
                    <div className="video-wrapper">
                        <video 
                            src={IntroVideoLink} 
                            autoplay 
                            loop 
                            muted 
                            playsinline 
                            controls 
                            className="intro-video">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="intro-text">
                        <p>
                            At Pristine Smiles, dentistry with personal touch ,we believe exceptional 
                            dental care starts with a personal touch. Our team takes the time to truly listen, 
                            understand your needs, and make you feel at ease every step of the way. 
                            From routine check-ups to advanced treatments, we tailor every visit to 
                            you—because no two smiles are the same.
                        </p>
                        <p>
                            With gentle care, modern technology, and a warm, welcoming atmosphere, we’re 
                            committed to making your dental experience comfortable and rewarding. 
                            At Pristine Smiles, you're not just a patient—you’re part of our family. 
                            Your smile matters to us, and so does your comfort.
                        </p>
                    </div>
                </div>
                <a href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" className="intro-cta">Book Your Appointment</a>                
            </div>
        </section>

    );
};

export default IntroVideo;
