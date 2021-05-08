import React, { useState } from 'react';
import ProjectsBar from '../ProjectsBar/ProjectsBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectImg1 from '../../images/projectImg1.png'
import './Projects.css'
import ShowEvents from '../ShowEvents';

/* <Projects />
* Component for displaying project cards and filtering/sorting.
* Renders ProjectBar component and calls function to render project cards.
*/
export default function Projects() {
    
    const [category, setCategory] = useState("All")

    return (
            <div className="projects-container">
                <ProjectsBar setCategory={setCategory}/>
                <div className="projects-view"> 
                    <ShowEvents filter={category} />
                </div>
            </div>
    )
}