import React, {useState} from 'react';
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import Projects from '../../Components/Projects/Projects'
import Overlay from '../../Components/Overlay/Overlay'
import background from '../../images/pexels-aleksey-kuprikov-3493777.jpg'


/* <Landing />
* Good deed platform landing page.
* Page where user is redirected to post login
* Renders three components: navbar, header, projects.
*/
export default function Landing() {

    return (
        <div>
            <Header />
            <Projects />
        </div>
    )
}