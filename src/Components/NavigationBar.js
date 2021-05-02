import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from 'rsuite';

class NavigationBar extends Component {
    render() {
        return (
            <div className="nav-styling">
                <Nav className="mr-auto">
                    <Nav.Item componentClass={Link} to="/home">Home</Nav.Item>
                    <Nav.Item componentClass={Link} to="/community">Community</Nav.Item>
                    <Nav.Item componentClass={Link} to="/venues">Venues</Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default NavigationBar;