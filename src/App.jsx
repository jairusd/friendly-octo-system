import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import AppForm from './components/AppForm'
import LoaderModal from './components/LoaderModal'
import ToastMessage from './components/ToastMessage'
import WithErrorBoundary from './components/WithErrorBoundary'

import actions from './redux/actions'

import './css/bootstrap.min.css'
import './css/main.css'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      toastVisible: false
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const { toastVisible, message } = nextProps
    if (toastVisible) {
      return {
        toastVisible, message
      }
    }
    return null
  }

  handleLoaderClose = () => {
    this.setState({ submitting: false })
  }

  handleDismissToast = () => {
    this.setState({ toastVisible: false })
  }

  handleFormSubmit = (inputs) => {
    const { dispatch } = this.props
    dispatch(actions.SubmitForm(inputs))
  }

  render() {
    const { toastVisible, message } = this.state
    const { processing } = this.props
    return (
      <div className='App'>
        <Grid>
          <Row>
            <AppForm onFormSubmit={this.handleFormSubmit} resolved={toastVisible} />
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

export default WithErrorBoundary(connect(state=>state)(App))

App.propTypes = {
  processing: PropTypes.bool.isRequired,
  toastVisible: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    data: PropTypes.string,
    status: PropTypes.number
  })
}

