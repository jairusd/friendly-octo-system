import React, { PureComponent } from 'react'
import Validator from 'validator'

import { Col, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

const empty = {
  name: '',
  email: '',
  message: ''
}

class AppForm extends PureComponent {
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      inputs: { ...empty },
      errors: {},
      resolved: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { resolved } = nextProps
    if (resolved && !prevState.resolved) {
      return {
        resolved,
        inputs: { ...empty }
      }
    }
    return null
  }

  handleInputChange(e) {
    const { inputs: prevInputs, errors: prevErrors } = this.state
    const value = e.target.value
    const id = e.target.id

    const inputs = { ...prevInputs, [id]: value }
    let errors = { ...prevErrors }

    if (value.length <= 0) {
      errors = { ...prevErrors, [id]: 'error' }
    } else if (id === 'email' && !Validator.isEmail(value)) {
      errors = { ...prevErrors, [id]: 'error' }
    } else {
      delete errors[id]
    }

    this.setState({ inputs, errors })
  }

  handleSubmit() {
    const { inputs } = this.state
    const { onFormSubmit } = this.props
    onFormSubmit(inputs)
  }

  render() {
    const { inputs, errors } = this.state
    return (
      <div className='app_form'>
        <Form horizontal>
          <FormGroup controlId='name' validationState={errors.name}>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl
                type='text'
                placeholder='required'
                onChange={this.handleInputChange}
                value={inputs.name} />
            </Col>
          </FormGroup>

          <FormGroup controlId='email' validationState={errors.email}>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type='email'
                placeholder='required'
                onChange={this.handleInputChange}
                value={inputs.email} />
            </Col>
          </FormGroup>

          <FormGroup controlId='message' validationState={errors.message}>
            <Col componentClass={ControlLabel} sm={2}>
              Message
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass='textarea'
                placeholder='required'
                onChange={this.handleInputChange}
                value={inputs.message} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={10} sm={2}>
              <Button onClick={this.handleSubmit} bsStyle='primary' block>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default AppForm
