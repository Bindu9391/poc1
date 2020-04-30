import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {dropdown} from 'react-bootstrap'; 

const MyApp = () => {
    return ( 
        
        <div className="dropdown">
            <button className="dropbtn">dropdown</button>
            <div className="dropdown-content">
            <a href="#">link1</a>
            <a href="#">link1</a>
            <a href="#">link1</a>
            </div>
        </div>
        
     );
}
 
export default MyApp;
