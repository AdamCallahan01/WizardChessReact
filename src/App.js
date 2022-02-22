import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import DesignIdea from './Components/pages/DesignIdea';
import About from './Components/pages/About';
import Layouts from './Components/pages/Layouts';

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
        </Routes>
      </Router>

      
    </>
  );
}

export default App;
