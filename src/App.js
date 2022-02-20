import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import './styles/mainStyle.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Projects />
    </div>
  );
}

export default App;
