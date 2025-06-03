import React from 'react';
import './index.css';
import IntroVideoLink from '../../assets/videos/IntroVideo.mp4';

function IntroVideo() {
    return (
        <section class="clinic-intro-video">
            <div class="container">
                <h2 class="intro-video-heading">Welcome to Pristine Smiles</h2>
                <div className='intro-video-content'>
                    <div class="video-wrapper">
                        <video 
                            src={IntroVideoLink} 
                            autoplay 
                            loop 
                            muted 
                            playsinline 
                            controls 
                            class="intro-video">
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
                
            </div>
        </section>

    );
};

export default IntroVideo;
