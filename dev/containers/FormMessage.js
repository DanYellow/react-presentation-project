import React from 'react'
import { connect } from 'react-redux'

import FormMessage from '../components/FormMessage'
import { addMessage } from '../actions/'


const mapDispatchToProps = {
  addMessage
}

function mapStateToProps(state) {
  return {
    textareaValue: state.textarea,
    messages: state.messages
  }
}

var FormMessageContainer = connect(mapStateToProps)(FormMessage)

export default FormMessageContainer
