import React, { PureComponent } from 'react'
import axios from 'axios'
import { Grid, Row } from 'react-bootstrap'

import AppForm from './components/AppForm'
import LoaderModal from './components/LoaderModal'
import ToastMessage from './components/ToastMessage'

import './css/bootstrap.min.css'
import './css/main.css'

class App extends PureComponent {
  constructor() {
    super()
    this.handleLoaderClose = this.handleLoaderClose.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleDismissToast = this.handleDismissToast.bind(this)
    this.state = {
      submitting: false,
      toastVisible: false
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  handleLoaderClose() {
    this.setState({ submitting: false })
  }

  handleDismissToast() {
    this.setState({ toastVisible: false })
  }

  handleFormSubmit(inputs) {
    this.setState({ submitting: true }, async ()=>{
      const config = {
        method: 'post',
        url: 'http://localhost:3001/posts',
        data: inputs
      }
      await this.timeout(3000)
      const { status, statusText } = await axios(config)
    })
  }

  render() {
    const { submitting, toastVisible } = this.state
    return (
      <div className='App'>
        <Grid>
          <Row>
            <AppForm onFormSubmit={this.handleFormSubmit} />
          </Row>
          <Row>
            { toastVisible && <ToastMessage onDismiss={this.handleDismissToast} /> }
          </Row>
        </Grid>
        <LoaderModal show={submitting} onHide={this.handleLoaderClose} />
      </div>
    )
  }
}

export default App
