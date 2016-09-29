import React from 'react'
import uuid from 'node-uuid'

import FormMessage from '../containers/FormMessage.js'

export default class Messages extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.messages.map(message =>
          <li key={uuid.v1()}> {message} </li>
        )}
        </ul>
        <FormMessage />
      </div>
    );
  }
}