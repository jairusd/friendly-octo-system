import React, { PureComponent } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import AppForm from './components/AppForm'
import LoaderModal from './components/LoaderModal'
import ToastMessage from './components/ToastMessage'

import actions from './redux/actions'

import './css/bootstrap.min.css'
import './css/main.css'

class App extends PureComponent {
  constructor() {
    super()
    this.handleLoaderClose = this.handleLoaderClose.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleDismissToast = this.handleDismissToast.bind(this)
    this.state = {
      toastVisible: false
    }
  }

  handleLoaderClose() {
    this.setState({ submitting: false })
  }

  handleDismissToast() {
    this.setState({ toastVisible: false })
  }

  handleFormSubmit(inputs) {
    const { dispatch } = this.props
    dispatch(actions.SubmitForm(inputs))
  }

  render() {
    const { toastVisible } = this.state
    const { processing, message } = this.props
    return (
      <div className='App'>
        <Grid>
          <Row>
            <AppForm onFormSubmit={this.handleFormSubmit} />
          </Row>
          <Row>
            { toastVisible && <ToastMessage onDismiss={this.handleDismissToast} message={message} /> }
          </Row>
        </Grid>
        <LoaderModal show={processing} onHide={this.handleLoaderClose} />
      </div>
    )
  }
}

export default connect(state=>state)(App)
