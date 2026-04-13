import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="#" title="GitHub">GitHub</a>
          <a href="#" title="LinkedIn">LinkedIn</a>
          <a href="#" title="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
