import React, { useState, useEffect } from 'react';  // Importing useState and useEffect from React
import './index.css';  // Importing the CSS for the button

function CallUsButton() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  // Tracking window width

  // Listen for window resize events to update the windowWidth state
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set the max-width breakpoint for mobile view
  const maxWidth = 780;

  return (
    <div className="call-us-button-container">
      {windowWidth <= maxWidth ? (
        // Render simplified version for mobile view (maxWidth <= 780px)
        <a href="tel:+61294761418">
          <i 
            className="fas fa-phone fa-rotate-90" 
            style={{ color: 'black', marginRight: "5px", marginTop: "3px" }} 
          ></i>
        </a>
      ) : (
        // Render full version for desktop view (window width > 780px)
        <a href="tel:+61294761418">
          <i 
            className="fas fa-phone fa-rotate-90" 
            style={{ color: 'black', marginRight: "5px", marginTop: "3px" }} 
          ></i>
          (02) 9476 1418
        </a>
      )}
    </div>
  );
}

export default CallUsButton;
