import React, { useState } from 'react';
import Project from './Project';

// Assets
import ToDoPhoto from '../assets/images/ToDoApp.png';

const Projects = () => {
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
        />
      </div>
    </section>
  );
};

export default Projects;
