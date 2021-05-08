import React from 'react';
import './ProjectsBar.css'

/* Function that returns category selection buttons for projects navbar */
function renderCategories(props) {
    return (
        <div className="category-container">
            <button onClick={() => props.setCategory("All")} className="category-box"> All </button>
            <button onClick={() => props.setCategory("Education")} className="category-box"> Education </button>
            <button className="category-box"> Art </button>
            <button className="category-box"> Healthcare </button>
            <button className="category-box"> Environment </button>
            <button className="category-box"> Accesibility </button>
        </div>
    )
}

function handleClick(event) {console.log(event)}

/* <ProjectsBar />
* Bar with filtering, sorting and category selection functionality.
* Rendered above project cards in <Projects /> for project navigation.
*/
export default function ProjectsBar(props) {
    return (
            <div className="bar">
                <div className="bar-left"> 
                    <div className="sort-box"> Projects </div>
                </div>
                <div className="bar-center">
                    {renderCategories(props)}
                </div>
                <div className="bar-right"> 
                    <div className="filter-box"> Filters </div>
                </div>
            </div>
    )
}