/**
 * Wrapper creates a card and handles display toggling of content
 */

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './CardComponent.module.css';

class CardComponent extends Component {
    constructor() {
        super();
        this.state = { showInfo: false };

        this.toggleShowContent = this.toggleShowContent.bind(this);
    }

    // Toggles if the content in the card will be shown
    toggleShowContent = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        const showInfo = this.state.showInfo;
        const children = this.props.children;
        let content;

        if (showInfo) {
            content = <p key="info">{this.props.info}</p>;
        } else {
            content = undefined;
        }

        let info = undefined;
        if (this.props.info) {
            info = [
                <hr key="hr"></hr>,
                content,
                <Button key="button" variant="primary" onClick={this.toggleShowContent} style={{ width: '100%' }}>Show Info</Button>
            ]
        }

        return (
            <Card>
                <Card.Body className={styles.card} >
                    {children}
                    {info}
                </Card.Body>
            </Card>
        );
    }
}

export default CardComponent;