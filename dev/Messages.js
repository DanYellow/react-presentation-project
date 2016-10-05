import React from 'react'
import uuid from 'node-uuid'

import FormMessage from './FormMessage.js'

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  /**
   * Add messages added to the list
   * @param  {String} message Text from textarea
   * @return null
   */
  messageAdded(message) {
    this.setState({ messages: [...this.state.messages, message]});
  }

  render() {
    let { messages } = this.state;

    return (
      <div>
        <ul>
        {messages.map((message, index) => {
          return <li>{ message }</li>
        })}
        </ul>
        <FormMessage onSubmitCallback={this.messageAdded.bind(this)} />
      </div>
    );
  }
}