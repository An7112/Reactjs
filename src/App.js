
import './App.css';
import React from 'react';
import {BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import { Order } from './components/Order';
// import { Login } from 'heroicons-react';
import Login from './components/login';
import { IoLogInOutline } from "react-icons/io5";

function App() {
  return (
    <Router>
      
      <div>
        <nav>
          <ul className="header">
            <li style={{float:'left'}}>
              <NavLink to='Login'><IoLogInOutline style={{width:'50px', height:'30px'}} /></NavLink>
            </li>
            <li style={{marginLeft:'-5%'}}>
              <NavLink to='/Home'>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to='Menu'>Thực đơn</NavLink>
            </li>
            
            <li >
              <NavLink to='Order'>Đặt bàn</NavLink>
            </li>
            <li>
              <NavLink to='About'>Về chúng tôi</NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="route">
          <Route path='/Home'><Home/></Route>
          <Route path='/Menu'><Menu/></Route>
          <Route path='/About'><About/></Route>
          <Route path='/Order'><Order/></Route>
          <Route path='/Login'><Login/></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
