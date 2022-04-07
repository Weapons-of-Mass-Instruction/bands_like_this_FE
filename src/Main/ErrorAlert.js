import React from 'react';
import Alert from 'react-bootstrap/Alert';

class ErrorAlert extends React.Component {
  render() {
    return(
      <Alert variant="danger">
        <Alert.Heading>
          Oh DAAAAAANG! You got a Server error.
        </Alert.Heading>
      </Alert>
    );
  }
}

export default ErrorAlert;