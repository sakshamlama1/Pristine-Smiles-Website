import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import PriceListImage from "../../assets/price-list.png";

function PriceListButton() {
    return (
        <div
            className="price-list-button-container"
            style={{ backgroundImage: `url(${PriceListImage})` }}
        >
            <div className="price-list-overlay">
                <div className="price-list-content">
                    <label>Price List Available</label>
                    <NavLink className="price-list-button" exact to="/get-price-list">
                        Request Now
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default PriceListButton;
