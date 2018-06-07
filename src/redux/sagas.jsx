import { all, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import axios from 'axios'

function *SubmitForm({ payload: inputs }) {
  const config = {
    method: 'post',
    url: 'http://localhost:3001/posts',
    data: inputs
  }
  const { status, statusText } = yield axios(config)
  yield put({ type: 'START_PROCESS' })
  yield delay(1000)
  yield all([
    yield put({ type: 'FORM_SUBMIT', payload: { status, data: statusText } }),
    yield put({ type: 'CLEAR_PROCESS' })
  ])
}

function *watchMessages() {
  yield takeLatest('FORM_SUBMIT_REQUESTED', SubmitForm)
}

export default function *sagas() {
  yield all([
    watchMessages()
  ])
}
