import React from 'react';
// Assets
import GithubIcon from '../assets/icons/gitHub.svg';
import AngelistIcon from '../assets/icons/angelist.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import MediumIcon from '../assets/icons/medium.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
// Components
import SocialContainer from './SocialContainer';

const Presentation = () => (
  <section id="presentation" className="container">
    <div className="container content">
      <div>
        <h1>
          Hey There.
          <br />
          {'I’m Andrés '}
          <span className="dot" />
        </h1>
        <h2>
          I’m a Software Developer
        </h2>
        <p>
          {`Full-Stack Web Development Student that likes learning things by himself. 
          I've worked with people from all over the world to build real-world 
          web projects using technologies such as JavaScript, Ruby, Rails, and some more! 
          If you like what you see and have a project you need built, 
          don't hesitate to contact me.`}
        </p>
      </div>
      <SocialContainer
        github={GithubIcon}
        angelist={AngelistIcon}
        linkedin={LinkedinIcon}
        medium={MediumIcon}
        twitter={TwitterIcon}
      />
    </div>
  </section>
);

export default Presentation;
