import React from 'react';
import './Aboutus.css'
import AboutImg from '../images/about.jpg'

function AboutUs() {
    return (
        <div className="about-us">
            <div className="content">
                <div className="text-section">
                    <div className="up">
                        <h2>About Us</h2>
                        <h3>What we are and our history</h3>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>
                    <div className="down">
                        <h2>Vissin and Mission  </h2>
                        <h3>What we are and our history</h3>
                        <p>The industry's standard dummy text ever since the 1500s...</p>
                    </div>
                </div>
                <div className="image-section">
                    <img src={AboutImg} alt="no img" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;