import React from 'react';
import PropTypes from 'prop-types';
// Assets
import CloseIcon from '../assets/icons/close-icon.svg';

const Menu = (props) => {
  const { active, setActive } = props;
  if (active) {
    return (
      <section id="menu">
        <button type="button" id="closeButton" onClick={() => setActive(false)}>
          <img src={CloseIcon} alt="close icon" />
        </button>
        <ul className="container content menu">
          <li className="textPlaceholder menu-item">
            <a href="#projects" aria-label="Portfolio" onClick={() => setActive(false)}> Portfolio </a>
          </li>
          <li className="textPlaceholder menu-item">
            <a href="#about" aria-label="About" onClick={() => setActive(false)}> About</a>
          </li>
          <li className="textPlaceholder menu-item">
            <a href="#contact" aria-label="Contact" onClick={() => setActive(false)}> Contact</a>
          </li>
        </ul>
      </section>
    );
  }
  return null;
};

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Menu;
