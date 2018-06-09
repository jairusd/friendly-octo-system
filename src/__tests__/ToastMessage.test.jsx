import React from 'react'
import { render } from 'react-dom'
import ToastMessage from '../components/ToastMessage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ToastMessage onDismiss={()=>{}} message={{ data: null, status: null }} />, div)
})
