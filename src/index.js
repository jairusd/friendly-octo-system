import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import reducers from './redux/reducers'
import sagas from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root')
)
