// src/Components/ServiceSection.jsx
import React from "react";
import "./index.css";

function ServiceSection({ video }) {
    return (
        <div className="service-section-container">
            <div className="media-side">
                <div className="media-video">
                    <video autoPlay loop muted playsInline>
                            <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
