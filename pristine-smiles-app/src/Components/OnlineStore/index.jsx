import "./index.css";
import React from "react";
import AppStoreImage from "../../assets/app-store.png";
import GooglePlayStoreImage from "../../assets/google-play-store.png";

function OnlineStore({ type, srcLink, appleLink, googleLink }) {
    return (
        <>
            <div className="online-store-information">
                <div className="online-store-left">
                    <iframe 
                        src={srcLink} // Dynamically setting src with the passed prop
                        title={`${type} - How It Works`} // Dynamically setting title with the type prop
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="online-store-right">
                    <h2>Get Started & download the {type} App Today</h2> {/* Dynamically setting title with the type prop */}
                    <p>
                        Check your payment limit in the App by selecting the barcode. 
                        When your treatment is finished, have your barcode scanned at reception. 
                        The first of your four payments will be taken at the time of your visit.
                    </p>
                    <div className="online-store-logos">
                        <a
                            href={appleLink} // Dynamically setting the Apple link
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={AppStoreImage}
                                alt={`Download on the App Store for ${type}`} // Dynamically setting alt text with the type prop
                                className="online-store-logo"
                            />
                        </a>
                        <a
                            href={googleLink} // Dynamically setting the Google link
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={GooglePlayStoreImage}
                                alt={`Get it on Google Play for ${type}`} // Dynamically setting alt text with the type prop
                                className="online-store-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OnlineStore;
