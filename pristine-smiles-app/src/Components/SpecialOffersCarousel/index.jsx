import React, { useState } from "react";
import "./index.css";

const SpecialOffersCarousel = ({ offers = [] }) => {
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleOffers = () => {
    const total = offers.length;
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(offers[(startIndex + i) % total]);
    }
    return visible;
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  return (
    <div className="offers-carousel-wrapper">
        <div className="carousel-content" id="smiles-carousel">
            <div className="carousel-overlay">
                <div className="carousel-text-container">
                    <h2>Special Offers</h2>
                    <p>Explore limited-time dental offers designed to make your perfect smile more accessible and affordable.</p>
                </div>
            </div>
        </div>
        <div className="carousel-nav">
            <button onClick={handlePrev}>&larr;</button>
            <div className="offers-carousel">
                {getVisibleOffers().map((offer, idx) => (
                <div className="offer-tile" key={idx}>
                    <img src={offer.image} alt={offer.title} />
                    <h2>{offer.title}</h2>
                    {offer.price && <p className="offer-price">{offer.price}</p>}
                    <ul className="offer-description">
                    {offer.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    </ul>
                    <button className="offer-cta">Pre-Pay & Book</button>
                </div>
                ))}
            </div>
            <button onClick={handleNext}>&rarr;</button>
        </div>
    </div>
  );
};

export default SpecialOffersCarousel;
