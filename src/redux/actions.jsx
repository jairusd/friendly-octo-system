module.exports = {
  SubmitForm(inputs) {
    return {
      type: 'FORM_SUBMIT_REQUESTED',
      payload: inputs
    }
  }
}
