
import './App.css';
import React from 'react';
import {BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="header">
            <li className='logo' >
              <NavLink to='X'>X</NavLink>
            </li>
            <li >
              <NavLink to='Home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='Menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='About'>About</NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="route">
          <Route path='/Home'><Home/></Route>
          <Route path='/Menu'><Menu/></Route>
          <Route path='/About'><About/></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
