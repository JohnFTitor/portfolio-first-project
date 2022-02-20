import React, { useState } from 'react';
import Menu from './Menu';
// Assets
import MenuIcon from '../assets/icons/menu.svg';
import EmailIcon from '../assets/icons/mail.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const popUpMenu = () => {
    setActiveMenu(true);
  };

  return (
    <nav className="toolbar">
      <ul>
        <li className="textPlaceholder">
          <a href="#presentation" aria-label="John Doe"> John Doe </a>
        </li>
        <li>
          <button id="menuButton" type="button" onClick={popUpMenu}>
            <img src={MenuIcon} alt="" />
          </button>
        </li>
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
      <Menu active={activeMenu} setActive={setActiveMenu} />
    </nav>
  );
};

export default Header;
