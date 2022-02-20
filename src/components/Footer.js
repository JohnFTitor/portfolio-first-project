import React from 'react';
import SocialContainer from './SocialContainer';
// Assets
import GithubIcon from '../assets/icons/blacat.svg';
import AngelistIcon from '../assets/icons/peace.svg';
import LinkedinIcon from '../assets/icons/blackIN.svg';
import MediumIcon from '../assets/icons/blackM.svg';
import TwitterIcon from '../assets/icons/blacktwitter.svg';

const Footer = () => (
  <footer className="contact">
    <SocialContainer
      github={GithubIcon}
      angelist={AngelistIcon}
      linkedin={LinkedinIcon}
      medium={MediumIcon}
      twitter={TwitterIcon}
    />
  </footer>
);

export default Footer;
