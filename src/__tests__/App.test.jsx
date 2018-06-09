import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../redux/reducers'
import App from '../App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Provider store={store}><App /></Provider>, div)
})
