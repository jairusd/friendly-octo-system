import React from 'react'
import { render } from 'react-dom'
import WithErrorBoundary from '../components/WithErrorBoundary'



it('renders without crashing', () => {
  const div = document.createElement('div')
  render(WithErrorBoundary(), div)
})
