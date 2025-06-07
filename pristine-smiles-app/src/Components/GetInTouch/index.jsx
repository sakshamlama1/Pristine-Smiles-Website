import "./index.css";
import React, { useState } from "react";
import axios from "axios";

function GetInTouch() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        treatment: "",
        interest: "",
        message: ""
    });
    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to backend
            const response = await axios.post("http://localhost:8080/get-in-touch-contact", formData);
            console.log(response.data);
            alert(response.data.message);
            formRef.current.reset();
        } catch (error) {
            console.error("There was an error submitting the form:", error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="get-in-touch-component">
            <div className="get-in-touch-content">
                <h2>Get In Touch</h2>
                <form ref={formRef} className="floating-form" onSubmit={handleSubmit}>
                    <div className="name-fields">
                        <input type="text" name="firstName" placeholder="First Name*" required onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                    </div>
                    <input type="email" name="email" placeholder="Email*" required onChange={handleChange} />
                    <div className="phone-input">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number (e.g., +61 XXXXXXXXX or 04XXXXXXXX)"
                            pattern="^(?:\+61\d{9}|04\d{8})$"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="treatment-form-component" id="dynamic-form-item">
                        <label htmlFor="treatment">What Treatment Are You Interested In?</label>
                        <select name="treatment" onChange={handleChange}>
                            <option value="">Please Select</option>
                            <option value="Cosmetic">Cosmetic</option>
                            <option value="Dental Implant">Dental Implant</option>
                            <option value="Invisalign / Orthodontics">Invisalign</option>
                            <option value="General / Check Up">General / Check Up</option>
                        </select>
                    </div>
                    <div className="preference-form-component" id="dynamic-form-item">
                        <label htmlFor="interest">I'd Like To</label>
                        <select name="interest" onChange={handleChange}>
                            <option value="">Please Select</option>
                            <option value="Get more information">Get more information</option>
                            <option value="Book a consult">Book a consult</option>
                            <option value="Apply for a job">Apply for a job</option>
                            <option value="I'm an existing patient">I'm an existing patient</option>
                            <option value="Something else">Something else</option>
                        </select>
                    </div>
                    <div className="textarea=form-component" id="dynamic-form-item">
                        <textarea name="message" placeholder="Anything Else We Can Help With?" onChange={handleChange}></textarea>
                    </div>
                    
                    <button type="submit">Get In Touch</button>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "2rem" }}>
                        <p className="small-note">Prefer to book directly?</p>
                        <a href="https://apac.mydentalhub.online/v1/view/organization/1956/index.html#/perspectives/1" className="book-btn-secondary">
                            Book Your Appointment
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GetInTouch;