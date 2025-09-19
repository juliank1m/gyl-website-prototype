import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <h3>GLOBAL YOUTH LEADERS</h3>
          <p>Join us to become a leader.</p>
        </div>

        <div className="socials">
          <h4>Contact & Socials</h4>
          <ul>
            <li>
              <a href="mailto:global.youth.leader@gmail.com" aria-label="Email GYL">
                {/* envelope icon (inline SVG so no extra assets needed) */}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 
                  2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 
                  2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
                </svg>
                <span>global.youth.leader@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gylcanada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GYL on Instagram"
              >
                {/* instagram icon (inline SVG) */}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 
                  5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 
                  3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 
                  3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 
                  16.8 2.8 2.8 0 0 0 12 9.2ZM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
                </svg>
                <span>@gylcanada</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="legal">
          <p>© GYL {new Date().getFullYear()}, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
