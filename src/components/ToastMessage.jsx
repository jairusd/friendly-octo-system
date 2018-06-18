import React from 'react'
import PropTypes from 'prop-types'
import { Col, FormGroup, Alert, Button } from 'react-bootstrap'

const ToastMessage = ({ onDismiss, message: { data, status } }) => (
  <Col smOffset={2} sm={10}>
    <FormGroup controlId="message">
      <Alert bsStyle={status === 201 ? 'success' : 'danger'} onDismiss={onDismiss}>
        <h4>Success</h4>
        <p>
          { data === 'Created' ? 'Message successfully submitted' : data }
        </p><br />
        <Button onClick={onDismiss}>Dismiss</Button>
      </Alert>
    </FormGroup>
  </Col>
)

export default ToastMessage

ToastMessage.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  message: PropTypes.shape({
    data: PropTypes.string,
    status: PropTypes.number
  })
}

