/**
 * Dashboard handles the app's user dashboard functionality
 */

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CardComponent from '../CardComponent/CardComponent';
import UserComponent from '../UserComponent/UserComponent';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { users: ["pelle", "kalle"], color: "red" };

        this.userName = React.createRef();

        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.toggleColor = this.toggleColor.bind(this);
    }

    // Adds a user from the form to the state.users list
    addUser = () => {
        if (this.userName.current.value) {
            let users = this.state.users.concat([], this.userName.current.value);
            this.setState({ users: users });

            this.userName.current.value = '';
        }
    }

    // Removes the last user in state.users
    removeUser = () => {
        let users = this.state.users.slice(0, this.state.users.length - 1);
        this.setState({ users: users });
    }

    // Toggles the color in the state between green and red
    toggleColor = () => {
        if (this.state.color === "red") {
            this.setState({ color: "green" })
        } else {
            this.setState({ color: "red" })
        }
    }

    render() {
        let users = [];
        this.state.users.forEach(element => {
            users.push(
                <UserComponent key={element} user={element} color={this.state.color}></UserComponent>
            )
        });

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CardComponent>
                    {users}
                    <Button variant="primary" onClick={this.toggleColor} style={{ width: '100%' }}>Toggle Colors</Button>
                </CardComponent>
                <CardComponent>
                    <FormControl ref={this.userName} type="text" placeholder="New User..." />
                    <Button variant="success" onClick={this.addUser} style={{ width: '100%' }}>Add</Button>
                    <Button variant="danger" onClick={this.removeUser} style={{ width: '100%' }}>Remove</Button>
                </CardComponent>
            </div>
        );
    }
}

export default DashboardComponent;