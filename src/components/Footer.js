import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h2 className="footer-title">Arthur Souza</h2>
        <p className="footer-text">Software Developer &amp; Enthusiast</p>
        <div className="footer-icons-container">
          <a href="mailto:Arthur.ghz@icloud.com" className="footer-link"><FontAwesomeIcon icon={faEnvelope} color="#000" /></a>
          <a href="https://www.linkedin.com/in/arthurghz/" className="footer-link"><FontAwesomeIcon icon={faLinkedin} color="#000" /></a>
          <a href="https://www.instagram.com/arthsouza__/" className="footer-link"><FontAwesomeIcon icon={faInstagram} color="#000" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
