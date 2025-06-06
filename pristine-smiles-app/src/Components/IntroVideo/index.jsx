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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vivamus lacinia odio vitae vestibulum vestibulum. 
                            Cras venenatis euismod malesuada. Fusce et libero nec nulla 
                            facilisis tincidunt. Sed malesuada dolor vel justo gravida, 
                            ac suscipit orci fermentum.
                        </p>
                        <p>
                            Aliquam erat volutpat. Aenean condimentum sem ut sapien 
                            consequat, vel eleifend est malesuada. Proin tincidunt 
                            felis ut mi fermentum, et volutpat ligula ultricies.
                        </p>
                    </div>
                </div>
                <a href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" className="intro-cta">Book Your Appointment</a>                
            </div>
        </section>

    );
};

export default IntroVideo;
