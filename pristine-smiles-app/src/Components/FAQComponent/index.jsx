import "./index.css";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQComponent({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-text">
            {faqs.map((faq, index) => (
                <div className="faq-section" key={index}>
                    <div
                        className="faq-question"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h2>{faq.question}</h2>
                        {openIndex === index ? (
                            <ChevronUp size={20} color="#5B9D7D" />
                        ) : (
                            <ChevronDown size={20} color="#5B9D7D" />
                        )}
                    </div>
                    {openIndex === index && (
                        <p className="faq-answer">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>

    );
}

export default FAQComponent;