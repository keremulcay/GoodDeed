import React, { Component } from 'react';
import AllEvents from "../../Components/AllEvents";
import './Community.css'


// export default function Community() {
//     return (
//         <body>
//             Hello World
//         </body>
//     )
// }

class Community extends Component {
    render() {
        return (
        <body>
            Hello World
            <AllEvents />
        </body>
        )
    }
}

export default Community;