import React, { useState } from 'react';
import './ProjectsBar.css'


/* <ProjectsBar />
* Bar with filtering, sorting and category selection functionality.
* Rendered above project cards in <Projects /> for project navigation.
*/
export default function ProjectsBar(props) {
    const [active, setActive] = useState("All")

    /* Function that returns category selection buttons for projects navbar */
function renderCategories() {
    return (
        <div className="category-container">
            <button name="All" onClick={handleClick} className={ (active == "All") ? ("active-category") : ("category-box")}> All </button>
            <button name="Education" onClick={handleClick} className={ (active == "Education") ? ("active-category") : ("category-box")}> Education </button>
            <button name="Art" onClick={handleClick} className={ (active == "Art") ? ("active-category") : ("category-box")}> Art </button>
            <button name="Healthcare" onClick={handleClick} className={ (active == "Healthcare") ? ("active-category") : ("category-box")}> Healthcare </button>
            <button name="Environment" onClick={handleClick} className={ (active == "Environment") ? ("active-category") : ("category-box")}> Environment </button>
            <button name="Accessibility" onClick={handleClick} className={ (active == "Accessibility") ? ("active-category") : ("category-box")}> Accesibility </button>
        </div>
    )
}

function handleClick(event) {
    props.setCategory(event.target.name)
    setActive(event.target.name)
}


    return (
            <div className="bar">
                <div className="bar-left"> 
                    <div className="sort-box"> Projects </div>
                </div>
                <div className="bar-center">
                    {renderCategories()}
                </div>
                <div className="bar-right"> 
                </div>
            </div>
    )
}