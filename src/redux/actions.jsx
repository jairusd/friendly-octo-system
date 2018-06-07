module.exports = {
  SubmitForm(inputs) {
    return {
      type: 'FORM_SUBMIT' + '_REQUESTED',
      payload: inputs
    }
  }
}
