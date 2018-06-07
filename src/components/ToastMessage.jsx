import React from 'react'
import { Col, FormGroup, Alert, Button } from 'react-bootstrap'

const LoaderModal = ({ onDismiss, message: { data, status } }) => (
  <Col smOffset={2} sm={10}>
    <FormGroup controlId='message'>
      <Alert bsStyle={ status === 201 ? 'success' : 'danger' } onDismiss={onDismiss}>
        <h4>Success</h4>
        <p>
          { data === 'Created' ? 'Message successfully submitted' : 'Something went wrong...' }
        </p><br />
        <Button onClick={onDismiss}>Dismiss</Button>
      </Alert>
    </FormGroup>
  </Col>
)

export default LoaderModal

