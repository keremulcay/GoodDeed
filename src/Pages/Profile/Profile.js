import React from 'react';
import { CgProfile } from 'react-icons/cg';
import './Profile.css';
import background from '../../images/pexels-aleksey-kuprikov-3493777.jpg'
import AllEvents from '../../Components/AllEvents';


const initialForm2State = { adName: 'testAd', brandName: 'testBrand' }

export default function Profile() {

    /* Renders and returns 4 ProjectCard components to be displayed */
function renderProjectCards() {
    return (
        <div className="projects-view"> 
            <AllEvents/>
        </div>
    )
}



		return(
            <div >
			<div id="profile-container">
				< CgProfile id="profile-icon" />
					<h1 id="brand-name">Timur</h1>
                    { renderProjectCards() }
						<button className="logout-button" id="sign-in-btn"> Sign Out </button>
			</div>
            </div>
		)
}

