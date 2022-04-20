import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import DesignIdea from './Components/pages/DesignIdea';
import About from './Components/pages/About';
import Layouts from './Components/pages/Layouts';
import Game from './Components/pages/Game';
import Wordle from './Components/pages/Wordle';


function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/design' element={<DesignIdea/>} />
          <Route path='/layouts' element={<Layouts/>} />
          <Route path='/wordle' element={<Wordle/>} />
          <Route path='/game' element={<Game/>} />
        </Routes>
      </Router>

      
    </>
  );
}

export default App;