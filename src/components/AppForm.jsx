import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Validator from 'validator'
import _ from 'lodash'

import { Col, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

const empty = {
  name: '',
  email: '',
  message: ''
}

class AppForm extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { resolved } = nextProps
    if (resolved && !prevState.resolved) {
      return {
        resolved,
        inputs: { ...empty },
        isValid: false
      }
    }
    return null
  }

  constructor() {
    super()
    this.state = {
      inputs: { ...empty },
      errors: {}
    }
  }

  handleInputChange = (e) => {
    const { inputs: prevInputs, errors: prevErrors } = this.state
    const { value } = e.target
    const { id } = e.target

    const inputs = { ...prevInputs, [id]: value }
    let errors = { ...prevErrors }
    errors = this.validateInput(inputs, errors, id)

    this.setState({ inputs, errors })
  }

  checkErrors = (id, value, errors) => {
    if (Validator.isEmpty(String(value))) {
      errors[id] = 'error'
    } else if (id === 'email' && !Validator.isEmail(value)) {
      errors[id] = 'error'
    } else {
      delete errors[id]
    }
  }

  validateInput = (inputs, errors, id) => {
    Object.entries(inputs).map((each) => {
      if (each[0] === id) {
        this.checkErrors(each[0], each[1], errors)
      }
    })
    return errors
  }

  validateForm = (inputs) => {
    const errors = {}
    Object.entries(inputs).map(each => this.checkErrors(each[0], each[1], errors))
    return {
      errors,
      isValid: _.isEmpty(errors)
    }
  }

  isValid = () => {
    const { inputs } = this.state
    const { isValid, errors } = this.validateForm(inputs)
    this.setState({ errors })
    return isValid
  }

  handleSubmit = () => {
    const { inputs } = this.state
    const { onFormSubmit } = this.props
    if (this.isValid()) {
      onFormSubmit(inputs)
    }
  }

  render() {
    const { inputs, errors } = this.state
    return (
      <div className="app_form">
        <Form horizontal>
          <FormGroup controlId="name" validationState={errors.name}>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="required"
                onChange={this.handleInputChange}
                value={inputs.name}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="email" validationState={errors.email}>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                placeholder="required"
                onChange={this.handleInputChange}
                value={inputs.email}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="message" validationState={errors.message}>
            <Col componentClass={ControlLabel} sm={2}>
              Message
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass="textarea"
                placeholder="required"
                onChange={this.handleInputChange}
                value={inputs.message}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={10} sm={2}>
              <Button onClick={this.handleSubmit} bsStyle="primary" block>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default AppForm

AppForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}
