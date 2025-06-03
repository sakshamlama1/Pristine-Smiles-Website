import "./index.css";
import React from "react";

function ServiceBooking({ title, content }) {

    return (
        <div className="services-booking-section">
            <h2>{title}</h2>
            <p>
                {content}
            </p>
            <a href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1">
                <button className='booking-service-btn' id='secondary'>Book Now</button>  
            </a> 
        </div>

    )

}

export default ServiceBooking 