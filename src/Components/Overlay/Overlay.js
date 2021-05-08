import React from 'react';
import './Overlay.css';
import { IoMdClose } from 'react-icons/io';
import {Routes, Route, Outlet} from 'react-router-dom';

export default function Overlay(props) {

		return(
			<div className="login-container">
					
					<div id="login-form">
						< IoMdClose onClick= { () => {props.closeOverlay()}} id="close-icon"/>
					</div>
			</div>
		)
}

