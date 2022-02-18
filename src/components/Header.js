import React from "react";

// Assets
import MenuIcon from '../assets/icons/menu.svg';
import EmailIcon from '../assets/icons/mail.svg';

const Header = () => (
  <nav className="toolbar">
    <ul>
      <li className="textPlaceholder"> <a href="#" aria-label="John Doe"> John Doe </a> </li>
        <li>
          <button id="menuButton" type="button">
            <img src={MenuIcon} alt="" />
          </button></li>
        <li id="navigation">
          <ul className="container">
              <li className="textPlaceholder">
                <a href="#projects" aria-label="Portfolio"> Portfolio</a>
              </li>
              <li className="textPlaceholder">
                <a href="#about" aria-label="About"> About</a>
              </li>
              <li className="textPlaceholder">
                <a href="#contact" aria-label="Contact"> Contact</a>
              </li>
              <li className="textPlaceholder">
                <a rel="noopener noreferrer" href="mailto:andresf.2117@gmail.com" aria-label="Send Email">
                  <img src={EmailIcon} alt="Send Email" />
                </a>
              </li>
          </ul>
        </li>
    </ul>
  </nav>
);

export default Header;