//import dependencies
import React from "react";

//import styling
import "./TriFold.scss";

//import images
import hvac1 from "../../../Assets/hvac1.jpg";
import hvac2 from "../../../Assets/hvac2.jpg";
import hvac3 from "../../../Assets/hvac3.jpg";

export default function TriFold() {

    return (
        <section className="trifold" >
            <div className="trifold-title" >The Future of Building Energy Management</div>
            <div className="trifold__box">
                <div className="trifold__images">
                    <img className="trifold__image trifold__image--1" src={hvac1} alt="rooftop hvac systems"/>
                    <img className="trifold__image trifold__image--2" src={hvac2} alt="hvac illustration"/>
                    <img className=" trifold__image trifold__image--3" src={hvac3} alt="hvac van"/>
                </div>
                <div className="trifold__container">
                    <div className="trifold__card">
                        <div className="trifold__card-title">
                            Cost Savings
                        </div>
                        <div className="trifold__card-text">
                            Our patented hvac-controlling system will enable your building to achieve big time savings!
                        </div>
                        <div className="trifold__button">
                            Save Money
                        </div>
                    </div>
                    <div className="trifold__card">
                        <div className="trifold__card-title">The Environment</div>
                        <div className="trifold__card-text">
                            Reduce building carbon footprint by up to 35% by saving energy on heating and cooling. We have helped over 300 buildings achieve LEED Gold certifications!
                        </div>
                        <div className="trifold__button">
                            Save Planet
                        </div>
                    </div>
                    <div className="trifold__card">
                        <div className="trifold__card-title">Award Winning Service</div>
                        <div className="trifold__card-text">
                            We leave no client disatsified! Our engineers and service technicians are on call to help out with any problems you experience with our services!
                        </div>
                        <div className="trifold__button">
                            Save Time
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}