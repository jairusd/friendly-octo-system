import { all, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import axios from 'axios'

function *SubmitForm({ payload: inputs }) {
  try {
    const config = {
      method: 'post',
      url: 'http://localhost:3001/posts',
      data: inputs
    }
    yield put({ type: 'START_PROCESS' })
    yield delay(5000)
    const { status, statusText } = yield axios(config)
    yield all([
      yield put({ type: 'FORM_SUBMIT', payload: { status, data: statusText } }),
      yield put({ type: 'CLEAR_PROCESS' })
    ])
    yield put({ type: 'CLEAR_DATA' })
  } catch (e) {
    yield all([
      yield put({ type: 'FORM_SUBMIT', payload: { status: 500, data: 'Something went wrong...' } }),
      yield put({ type: 'CLEAR_PROCESS' })
    ])
    yield put({ type: 'CLEAR_DATA' })
  }
}

function *watchMessages() {
  yield takeLatest('FORM_SUBMIT_REQUESTED', SubmitForm)
}

export default function *sagas() {
  yield all([
    watchMessages()
  ])
}
