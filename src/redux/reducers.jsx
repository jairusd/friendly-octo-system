const INITIAL_STATE = { processing: false, message: null }

export default function form(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'START_PROCESS':
    return { ...state, processing: true }
  case 'CLEAR_PROCESS':
    return { ...state, processing: false }
  case 'FORM_SUBMIT':
    return { ...state, message: action.payload }
  default:
    return { ...state }
  }
}

