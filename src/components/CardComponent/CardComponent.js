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
        this.state = { showInfo: true };

        this.toggleShowContent = this.toggleShowContent.bind(this);
    }

    // Toggles if the content in the card will be shown
    toggleShowContent() {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        const showInfo = this.state.showInfo;
        let content;

        if (showInfo) {
            content = this.props.children;
        } else {
            content = undefined;
        }

        return (
            <Card>
                <Card.Body className={styles.card} >
                    {content}
                    <hr></hr>
                    <Button variant="primary" onClick={this.toggleShowContent} style={{ width: '100%' }}>Show Content</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default CardComponent;