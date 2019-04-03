import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBarComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Navbar>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#user">User</Nav.Link>
            </Navbar>
        )
    }
}

export default NavBarComponent;