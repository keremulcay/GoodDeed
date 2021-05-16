import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'
import projectImg1 from '../../images/projectImg1.png'
import background from '../../images/pexels-aleksey-kuprikov-3493777.jpg'
import './Header.css'


/**
 * Dynamic (future) landing page header.
* Displays site title and description good deed platform in the landing page.
 * @component
 */
function Header() {
    return (
        <div className="header-container">
            <h1> Good Deed Platform </h1>
            <h3> Find good deed events near you. </h3>
        </div>
    )
}

export default Header;