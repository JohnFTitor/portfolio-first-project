import React from 'react';
// Assets
import Diamond from '../assets/icons/diamond.svg';
import Square from '../assets/icons/square.svg';
import Circle from '../assets/icons/circle.svg';

const About = () => (
  <section id="about" className="container">
    <div className="container content about">
      <h1> About me </h1>
      <p>
        {`I'm a Full-Stack Web Development Student that likes learning things by himself. 
          I'm currently enrolled in an international programming school called Microverse, where I've worked 
          with people from all over the world to build real-world web projects using technologies such as JavaScript, 
          Ruby, Rails, and some more!`}
        <br />
        {`You can say I learn by doing, and I love to learn. I’m always on the look for challenges, so if you like what 
        you see in this Portfolio, don't hesitate to give me one!`}
      </p>
      <a rel="noopener noreferrer" href="#presentation" className="interaction" aria-label="Get my Resume"> Get My Resume </a>
      <span className="line" />
    </div>
    <ul className="container content knowledge knowledge-parent">
      <li>
        <ul className="container content knowledge">
          <li>
            <div className="container categories">
              <img src={Diamond} alt="" />
              <h2> Languages </h2>
            </div>
          </li>
          <li className="textPlaceholder element">
            <p> JavaScript </p>
          </li>
          <li className="textPlaceholder element">
            <p> Ruby </p>
          </li>
          <li className="textPlaceholder element">
            <p> Html </p>
          </li>
          <li className="textPlaceholder element">
            <p> Css </p>
          </li>
        </ul>
      </li>
      <li>
        <ul className="container content knowledge">
          <li>
            <div className="container categories">
              <img src={Square} alt="" />
              <h2> Frameworks </h2>
            </div>
          </li>
          <li className="textPlaceholder element">
            <p> Bootstrap </p>
          </li>
          <li className="textPlaceholder element">
            <p> Ruby on Rails </p>
          </li>
          <li className="textPlaceholder element">
            <p> RSPec </p>
          </li>
          <li className="textPlaceholder element">
            <p> CapyBara </p>
          </li>
          <li className="textPlaceholder element">
            <p> Selenium </p>
          </li>
        </ul>
      </li>
      <li>
        <ul className="container content knowledge">
          <li>
            <div className="container categories">
              <img src={Circle} alt="" />
              <h2> Skills </h2>
            </div>
          </li>
          <li className="textPlaceholder element">
            <p> Codekit </p>
          </li>
          <li className="textPlaceholder element">
            <p> Github </p>
          </li>
          <li className="textPlaceholder element">
            <p> Codepen </p>
          </li>
          <li className="textPlaceholder element">
            <p> Gitlab </p>
          </li>
          <li className="textPlaceholder element">
            <p> Terminal </p>
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

export default About;
