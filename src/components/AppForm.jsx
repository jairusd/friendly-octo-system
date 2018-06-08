import React, { PureComponent } from 'react'

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
      inputs: { ...empty }
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const { resolved } = nextProps
    if (resolved) {
      return {
        inputs: { ...empty }
      }
    }
    return null
  }

  handleInputChange(e) {
    const value = e.target.value
    const id = e.target.id
    const { inputs: prevInputs } = this.state
    const inputs = { ...prevInputs, [id]: value }
    this.setState({ inputs })
  }

  handleSubmit() {
    const { inputs } = this.state
    const { onFormSubmit } = this.props
    onFormSubmit(inputs)
  }

  render() {
    const { name, email, message } = this.state
    return (
      <div className='app_form'>
        <Form horizontal>
          <FormGroup controlId='name'>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl
                type='text'
                placeholder='Your Complete Name'
                onChange={this.handleInputChange}
                value={name} />
            </Col>
          </FormGroup>

          <FormGroup controlId='email'>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type='email'
                placeholder='Your Email Address'
                onChange={this.handleInputChange}
                value={email} />
            </Col>
          </FormGroup>

          <FormGroup controlId='message'>
            <Col componentClass={ControlLabel} sm={2}>
              Message
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass='textarea'
                placeholder='Your Message'
                onChange={this.handleInputChange}
                value={message} />
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
