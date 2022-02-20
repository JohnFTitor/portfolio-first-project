import React from 'react';
import PropTypes from 'prop-types';

const SocialContainer = (props) => {
  const {
    github,
    angelist,
    twitter,
    medium,
    linkedin,
  } = props;

  return (
    <ul className="container socialGroup">
      <li className="social-media">
        <a
          rel="noopener noreferrer"
          id="githubButton"
          href="https://github.com/JohnFTitor"
          target="_blank"
          aria-label="GitHub"
        >
          <img src={github} alt="Github.com Icon" />
        </a>
      </li>
      <li className="social-media">
        <a
          rel="noopener noreferrer"
          id="linkedinButton"
          href="https://www.linkedin.com/in/andresfelipe117/?locale=en_US"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn.com Icon" />
        </a>
      </li>
      <li className="social-media">
        <a
          rel="noopener noreferrer"
          id="angelistButton"
          href="https://angel.co/u/andres-felipe-arroyave-naranjo"
          target="_blank"
          aria-label="Angelist"
        >
          <img src={angelist} alt="Angelist.com icon" />
        </a>
      </li>
      <li className="social-media">
        <a
          rel="noopener noreferrer"
          id="twitterButton"
          href="https://twitter.com/johnftitor"
          target="_blank"
          aria-label="Twitter"
        >
          <img src={twitter} alt="Twitter.com icon" />
        </a>
      </li>
      <li className="social-media">
        <a
          rel="noopener noreferrer"
          id="mediumButton"
          href="https://medium.com/@andresf.2117"
          aria-label="Medium"
        >
          <img src={medium} alt="Medium.com Icon" />
        </a>
      </li>
    </ul>
  );
};

SocialContainer.propTypes = {
  github: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  angelist: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default SocialContainer;
