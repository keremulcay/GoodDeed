import React, { useState } from 'react';
import './Overlay.css';
import { IoMdClose } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';

export default function Overlay(props) {

    const [form, setForm] = useState("login")

    function loginForm() {
        return(
            <div id="login-form">
            <div id="login-form-left">
                <h2> Sign In</h2>
                <input id="login-input" placeholder="E-mail"></input>
                <input id="login-input" placeholder="Password"></input>
                <a onClick={() => setForm("register")} style={{marginTop: "15px", cursor: "pointer"}}>Don't have an account? Sign Up</a>
                <a onClick={() => setForm("register")} style={{marginTop: "15px", cursor: "pointer"}}>Forgot your password?</a>
            </div>
            <div>
                < MdNavigateNext onClick= { () => {props.closeOverlay()}} id="next-icon"/>
            </div>
            </div>
        ) 

        

    }

    function registerForm() {
        return(
            <div id="login-form">
            <div id="login-form-left">
                <h2> Register</h2>
                <input id="login-input" placeholder="E-mail"></input>
                <input id="login-input" placeholder="Password"></input>
                <input id="login-input" placeholder="Confirm password"></input>
            </div>
            <div>
                < MdNavigateNext onClick= { () => {props.closeOverlay()}} style={{top: "115px"}} id="next-icon"/>
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

