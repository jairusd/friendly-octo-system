import React from 'react'
import { render } from 'react-dom'
import AppForm from '../components/AppForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<AppForm />, div)
})
