import React from 'react'
import uuid from 'node-uuid'

import FormMessage from '../containers/FormMessage.js'

export default class Messages extends React.Component {

  render() {
    return (
      <div>
        <FormMessage />
      </div>
    );
  }
}