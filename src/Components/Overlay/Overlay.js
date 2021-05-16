import React, { useState } from 'react';
import './Overlay.css';
import { IoMdClose } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';
import { Auth } from 'aws-amplify';


/**
 * Overlay
* Component responsible for logging in, registering, and authentication.
 * @component
 */
function Overlay(props) {

    async function signUp() {
        const {name, username, password} = formData
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    name,          // optional
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function signIn() {
        const {username, password} = formData
        try {
            const user = await Auth.signIn(username, password);
            console.log(user)
        } catch (error) {
            console.log('error signing in', error);
        }
    }    

    const [form, setForm] = useState("login")
    const emptyForm = {"name": "", "username": "", "password" : ""}
    const [formData, setFormData] = useState(emptyForm)
    const [userName, setUserName] = useState("")

    function logIn() {
        signIn()
        props.loggedIn()
        props.closeOverlay()
    }

    async function register() {
        props.setUser(userName)
        console.log("register: ", formData)
        signUp()
        props.loggedIn()
        props.closeOverlay()
    }

    function loginForm() {
        return(
            <div id="login-form">
            <div id="login-form-left">
                <h2> Sign In</h2>
                <input id="login-input" name="username" onChange={handleChange} placeholder="E-mail"></input>
                <input type="password" name="password" id="login-input" onChange={handleChange} placeholder="Password"></input>
                <a onClick={() => setForm("register")} style={{marginTop: "15px", cursor: "pointer"}}>Don't have an account? Sign Up</a>
                <a onClick={() => setForm("register")} style={{marginTop: "15px", cursor: "pointer"}}>Forgot your password?</a>
            </div>
            <div>
                < MdNavigateNext onClick={logIn} id="next-icon"/>
            </div>
            </div>
        ) 
    }

        
    const handleChange = (evt) => {
        if (evt.target.name == "name") {setUserName(evt.target.value)}
        setFormData( {...formData, [evt.target.name]: evt.target.value} )
    }


    function registerForm() {
        return(
            <div id="login-form">
            <div id="login-form-left">
                <h2 style={{marginBottom: "0px"}}> Register</h2>
                <input id="login-input" name="name" onChange={handleChange} placeholder="Name"></input>
                <input id="login-input" name="username" onChange={handleChange} placeholder="E-mail"></input>
                <input type="password" name="password" id="login-input" onChange={handleChange} placeholder="Password"></input>
                <input type="password" id="login-input" placeholder="Confirm password"></input>
            </div>
            <div>
                < MdNavigateNext onClick={register} style={{top: "115px"}} id="next-icon"/>
            </div>
            </div>
        ) 

        

    }

		return(
			<div className="login-container">
					
					<div>
						< IoMdClose onClick= { () => {props.closeOverlay()}} id="close-icon"/>
                        {(form == "login") ? (loginForm()) : (registerForm())}
					</div>
			</div>
		)
}

export default Overlay;
