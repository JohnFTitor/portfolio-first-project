import React, { useState } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Modal from './components/Modal';
import './styles/mainStyle.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [modalInfo, setModalInfo] = useState({});
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <Presentation />
      <Projects
        modal={modal}
        setModal={setModal}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
      />
      <Modal
        modal={modal}
        setModal={setModal}
        modalInfo={modalInfo}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
