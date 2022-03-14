import ListMenu from "./listmenu";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './admin.css'
// import Login from "./login";
import useToken from "./useToken";
import React,{Component} from 'react';
import TableRow from "./TableRow";
import Index from "./index.component";
function Admin() {
    // const { token, setToken } = useToken();
    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
    return (
      <div className="wrapper">
          <ListMenu></ListMenu>
      </div>
    );
  }
  
  export default Admin;