import "./index.css";
import React, { useState } from "react";
import axios from "axios";

function PriceListForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const capitaliseFirstLetter = (string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formattedData = {
                ...formData,
                firstName: capitaliseFirstLetter(formData.firstName.trim()),
                lastName: capitaliseFirstLetter(formData.lastName.trim()),
            };

            const response = await axios.post(
                "http://localhost:8080/price-list-form",
                formattedData,
                { responseType: 'blob' }
            );
        
            // Create a URL for the blob
            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Pristine Smiles - Price List.pdf'); // Filename for download
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        
            alert("Thank you! We've received your request and have sent the price list to your email. The download should start shortly.");
        
            formRef.current.reset();
        } catch (error) {
            console.error("There was an error submitting the form:", error);
            alert("Oops! Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
      

    return (
        <div className="price-list-form-component">
            <div className="price-list-form-content">
                <h2>Share Your Info to Download & Have the Price List Sent to Your Inbox</h2>
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
                    <button type="submit" disabled={isLoading} className={`submit-button ${isLoading ? 'disabled' : ''}`}>
                        {isLoading ? "Preparing your download..." : "Send & Download My Price List"}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default PriceListForm;
