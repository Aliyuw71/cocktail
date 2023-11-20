import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Singlepage from './pages/Singlepage';
import Error from './pages/Error';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='*' element = {<Error/>}/>
        <Route path='cocktail/:id' element = {<Singlepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
