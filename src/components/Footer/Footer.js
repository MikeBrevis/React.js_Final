import React from 'react';
import './Footer.css';
import logo from './logo.png'; // reemplazar con la ruta de tu logo
import instagramLogo from './instagram.png'; // reemplazar con la ruta de tu logo de instagram
import twitterLogo from './twitter.png'; // reemplazar con la ruta de tu logo de twitter

const Footer = () => (
    <div className="footer">
        <div className="footer-left">
            <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-center">
            <p>Visita nuestras redes sociales</p>
        </div>
        <div className="footer-right">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" className="social-logo" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterLogo} alt="Twitter" className="social-logo" />
            </a>
        </div>
    </div>
);

export default Footer;
