import React from 'react'
import { render } from 'react-dom'
import LoaderModal from '../components/LoaderModal'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<LoaderModal />, div)
})
