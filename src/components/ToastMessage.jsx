import React from 'react'
import { Col, FormGroup, Alert, Button } from 'react-bootstrap'

const LoaderModal = ({ onDismiss }) => (
  <Col smOffset={2} sm={10}>
    <FormGroup controlId='message'>
      <Alert bsStyle='success' onDismiss={onDismiss}>
        <h4>Success</h4>
        <p>
          Message successfully submitted.
        </p><br />
        <Button onClick={onDismiss}>Dismiss</Button>
      </Alert>
    </FormGroup>
  </Col>
)

export default LoaderModal

