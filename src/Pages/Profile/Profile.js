import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Redirect, withRouter } from 'react-router-dom';
import './Profile.css';
import background from '../../images/pexels-aleksey-kuprikov-3493777.jpg'
import AllEvents from '../../Components/AllEvents';
import { Auth } from 'aws-amplify';

function Profile(props) {

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    function signOut() {
        props.loggedOut()
        return <Redirect to="/" />
    }

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
					<h1 style={{color: "white", marginTop: "45px"}} id="name">{props.user}</h1>
                    <a className="logout-button" onClick={signOut} href="/" id="sign-in-btn"> Sign Out </a>
                    { renderProjectCards() }
			</div>
            </div>
		)
}

export default withRouter(Profile)