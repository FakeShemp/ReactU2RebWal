/**
 * UserComponent displays the name of one user
 */

import React from 'react';
import Alert from 'react-bootstrap/Alert'

function UserComponent(props) {
  return (
    <Alert variant="dark" style={{ color: props.color }}>{props.user}</Alert>
  );
}

export default UserComponent;