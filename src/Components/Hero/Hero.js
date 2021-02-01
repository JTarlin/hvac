//import dependencies
import React from "react";
import {Parallax} from "react-scroll-parallax";

//styling import
import { useEffect } from "react";
import "./Hero.scss";

//image import 
import skyline from "../../Assets/Toronto-skyline.jpg";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero__title">
                    Saving Energy, Money, and The Planet
                </div>
                <div className="hero__buttonbox">
                    <div className="hero__button">
                        Learn More
                    </div>
                </div>
            </div>
            <Parallax className="hero__bg" y={[10, -10]}>
                <img src={skyline} alt="toronto skyline" className="hero__image"/>
            </Parallax>
        </div>  
    )
}