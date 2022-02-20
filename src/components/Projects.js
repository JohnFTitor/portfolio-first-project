import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

// Assets
import ToDoPhoto from '../assets/images/ToDoApp.png';
import CapstonePhoto from '../assets/images/capstone.png';
import AwesomePhoto from '../assets/images/awesome.png';

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
      </div>
    </section>
  );
};

Projects.propTypes = {
  setModal: PropTypes.func.isRequired,
  setModalInfo: PropTypes.func.isRequired,
};

export default Projects;
