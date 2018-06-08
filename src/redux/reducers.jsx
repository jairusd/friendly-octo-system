const INITIAL_STATE = { processing: false, message: null, toastVisible: false }

export default function form(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'START_PROCESS':
    return { ...state, processing: true }
  case 'CLEAR_PROCESS':
    return { ...state, processing: false }
  case 'FORM_SUBMIT':
    return { ...state, message: action.payload, toastVisible: true }
  case 'CLEAR_DATA':
    return { ...state, message: null, toastVisible: false }
  default:
    return { ...state }
  }
}

