import React, { useState, useEffect } from 'react';
import logo from '../../assets/truckonnection-black.png';
import image1 from '../../assets/truckonnection2.png';
import image2 from '../../assets/skyscraper-truckonnection.png';
import image3 from '../../assets/day-truckonnection.png';
import './header.scss'

const Header = ({ isServicesVisible }) => {
    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start fading out the current image
            setOpacity(0);

            // After a brief delay, switch to the next image and start fading it in
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1);
            }, 1000); // Delay before switching to the next image (1 second)

        }, 10000); // Change image every 5 seconds

        return () => clearInterval(interval);
    });

    const backgroundImageStyle = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // Center the image at the top of the viewport
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        opacity: opacity,
        zIndex: 0,
        transition: 'opacity 0.8s ease-in-out', // Transition effect for opacity
    };

    return (
        <>
            <div style={backgroundImageStyle}></div>
            <header className={`masthead header ${isServicesVisible ? 'services-visible' : ''}`}>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#page-top"><img src={logo} className="logo" alt="logo" />
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className={`nav-item ${isServicesVisible ? 'active' : ''}`}>
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className={`nav-item ${isServicesVisible ? 'active' : ''}`}>
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className={`nav-item ${isServicesVisible ? 'active' : ''}`}>
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container px-4 px-lg-5 h-100 main-section">
                    <div
                        className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
                    >
                        <div className="col-lg-8 align-self-end">
                            <h1 className="text-white font-weight-bold title">Discover Seamless Logistics Solutions</h1>
                            <hr className="divider" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 mb-5">
                                We empower your business through expert dispatching and proficient freight hauling services!</p>
                            <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
};

export default Header;
