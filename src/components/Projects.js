import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

// Assets
import ToDoPhoto from '../assets/images/ToDoApp.png';
import CapstonePhoto from '../assets/images/capstone.png';
import AwesomePhoto from '../assets/images/awesome.png';
import MathMagicians from '../assets/images/mathMagicians.png';
import LeaderBoard from '../assets/images/leaderBoard.png';
import TicTacToe from '../assets/images/ticTacToe.png';
import Pokemon from '../assets/images/pokemon.png';

const Projects = (props) => {
  const {
    setModal,
    setModalInfo,
  } = props;

  const [isDesktop, setIsDesktop] = useState(() => (
    window.screen.width >= 1000
  ));

  window.addEventListener('resize', () => {
    setIsDesktop(() => window.screen.width >= 1000);
  });

  return (
    <section id="projects" className="container works">
      <div className="container works">
        <h2> My Recent Works </h2>
        <span className="line" />
      </div>
      <div className="gridContainer">
        <Project
          id="card-1"
          image={Pokemon}
          title="Choose your Pokemon"
          shortDescription={`"Choose your Pokemon" is a Webpack project meant to fetch data from two different APIs: 
          PokéAPI and Involvement API. Here we display a list of 20 Pokemons for whom one can like, display more info, 
          and comment; all based on the data from these two external resources.`}
          longDescription={`"Choose your Pokemon" is a Webpack project meant to fetch data from two different APIs: PokéAPI 
          and Involvement API. Here we display a list of 20 Pokemons for whom one can like, display more info, and comment; 
          all based on the data from these two external resources.
          This capstone project was built using JavaScript, bundled using webpack and tested using jest.`}
          tags={['SCSS', 'HTML', 'JavaScript', 'Webpack']}
          linkLive="https://carloshs1994.github.io/choose-your-pokemon/"
          linkSource="https://github.com/carloshs1994/choose-your-pokemon"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
        <Project
          id="special"
          image={CapstonePhoto}
          title="Landing Page"
          shortDescription={`This is a simple landing page built using HTML/SCSS and JavaScript. 
          This page provides basic navigation functionality and was made using an appropriate SCSS file structure.`}
          longDescription={`This is a simple landing page built using HTML/SCSS and JavaScript. 
          This page provides basic navigation functionality and was made using an appropriate SCSS file structure.`}
          tags={['SCSS', 'HTML', 'JavaScript']}
          linkLive="https://johnftitor.github.io/capstoneProject_first/"
          linkSource="https://github.com/JohnFTitor/capstoneProject_first"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
        <Project
          id="card-2"
          image={MathMagicians}
          title="Math Magicians"
          shortDescription={`Math Magicians! This is a website for all fans of mathematics. 
          It is a Single Page App (SPA) that allows users to make basic calculations and read a random math-related quote.`}
          longDescription={`Math Magicians! This is a website for all fans of mathematics. It is a Single Page App (SPA) 
          that allows users to make basic calculations and read a random math-related quote.
          Math Magicians is the first React Project I buit. The main objective of this was to understand React 
          features with a project-based learning approach`}
          tags={['CSS', 'React', 'JavaScript']}
          linkLive="https://jfmath-magicians.netlify.app/"
          linkSource="https://github.com/JohnFTitor/math_magicians"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
        <Project
          id="card-3"
          image={ToDoPhoto}
          title="To-Do List"
          shortDescription={`In this project, I built a simple HTML list of To-Do tasks. 
          This simple web page was built using Webpack,
          creating everything from a JavaScript index file that imported all the modules and assets`}
          longDescription={`In this project, I built a simple HTML list of To-Do tasks. This simple web 
          page was built using Webpack, creating everything from a JavaScript index file that imported all 
          the modules and assets. You can Add, Remove, Edit and Erase tasks, 
          with the info being saved on your browser so you don't lose track on your tasks!`}
          tags={['SCSS', 'HTML', 'JavaScript']}
          linkLive="https://johnftitor.github.io/toDoList/"
          linkSource="https://github.com/JohnFTitor/toDoList"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
        <Project
          id="card-4"
          image={LeaderBoard}
          title="Leader Board"
          shortDescription={`This simple project aims to connect to an API to fetch score data and display it on a LeaderBoard box, 
          as well as provide the tool to submit a new score.`}
          longDescription={`This website is a Leader Board App list using the Leaderboard API and JavaScript async and await functionality. 
          It allows the user to submit scores and retrieve data of previously saved scores from a private game created the first time the page is opened. 
          Have fun!`}
          tags={['SCSS', 'HTML', 'JavaScript', 'WebPack']}
          linkLive="https://johnftitor.github.io/leaderBoard/"
          linkSource="https://github.com/JohnFTitor/leaderBoard"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
        <Project
          id="card-5"
          image={AwesomePhoto}
          title="Awesome Books Library"
          shortDescription={`This is a Library Webpage built primarily with JavaScript, creating content dynamically 
          taking advantage of ES6 Features such as Classes.`}
          longDescription={`This is a Library Webpage built primarily with JavaScript, 
          creating content dynamically taking advantage of ES6 Features such as Classes.`}
          tags={['SCSS', 'HTML', 'JavaScript']}
          linkLive="https://melaniesigrid.github.io/awesomeBooks"
          linkSource="https://github.com/JohnFTitor/awesomeBooks"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
        <Project
          id="card-6"
          image={TicTacToe}
          title="TicTacToe Game"
          shortDescription={`Simple TicTacToe Game using JavaScript Module Pattern and Factory Functions.
           A MiniMax Algorithm was applied for machine response in the game.`}
          longDescription={`Simple TicTacToe Game using JavaScript Module Pattern and Factory Functions. 
          A MiniMax Algorithm was applied for machine response in the game. Game message= "Let's play a game. 
          This TicTacToe game brings back childhood in a virtual manner. Play with a friend by taking turns or dare 
          the machine to see if you can win (Spoiler: You can't. Don't believe me? Try!"`}
          tags={['CSS', 'HTML', 'JavaScript']}
          linkLive="https://johnftitor.github.io/ticTacToe/"
          linkSource="https://github.com/JohnFTitor/ticTacToe"
          desktop={isDesktop}
          setModal={setModal}
          setModalInfo={setModalInfo}
        />
      </div>
    </section>
  );
};

Projects.propTypes = {
  setModal: PropTypes.func.isRequired,
  setModalInfo: PropTypes.func.isRequired,
};

export default Projects;
