import React from 'react'
import { connect } from 'react-redux'

import Messages from '../components/Messages'


// We create some props for our containers (aka controller / High Order Component)
// const mapStateToProps = state => ({
//   messages: state.messages
// })

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

var MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer
