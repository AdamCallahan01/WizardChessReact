import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import DesginIdea from './Components/pages/DesignIdea';
import About from './Components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1>AHHHHHHHHHHHHHHh</h1>
        <Home></Home>
        <Routes>
          <Route path ="/" exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/designIdea' component={DesginIdea} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
