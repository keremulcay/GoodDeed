import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'


/**
 * Default site NavBar
* Navigates amongst menu items, renders searchbox component.
 * @component
 */
function NavBar(props) {
    if (props.logged) {
    return (
            <nav>
                <div className="nav-left"> 
                    <Link className="nav-item1" to="/"> Good Deed Platform </Link>
                </div>

                <div className="nav-right"> 
                <Link className="nav-item" to="/newEvent"> Create Project </Link>
                    <Link className="nav-item1" to="/profile"> Profile </Link>
                </div>
            </nav>
    )}
    else {
        return (
            <nav>
                <div className="nav-left"> 
                    <Link className="nav-item1" to="/"> Good Deed Platform </Link>
                </div>
                <div className="nav-right"> 
                <Link className="nav-item1" to="/about"> About </Link>
                    <Link className="nav-item" to="/" onClick={() => {props.openOverlay()}}> Sign in </Link>
                </div>
            </nav>
    )

    }
}

export default NavBar;