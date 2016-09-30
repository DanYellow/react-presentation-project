import React from 'react'
import uuid from 'node-uuid'

import { addMessage, updateTextarea } from '../actions'

export default class FormMessage extends React.Component {

  /**
   * Submit form
   * @param  {Object} e html object
   * @return null
   */
  submitMessage (e) {
    e.preventDefault();
    this.props.dispatch(addMessage(this.props.textareaValue));
  }

  /**
   * Handles change value in textarea
   * @param  {Object} textarea
   * @return null
   */
  handleChange (e) {
    // console.log(e.which)
    this.props.dispatch(updateTextarea(e.target.value));
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <h1>{ messages }</h1>
        <form onSubmit={(e) => this.submitMessage(e)}>
          <textarea onChange={(e) => this.handleChange(e)} 
          value={this.props.content} autoFocus="true" />
          <button>Add message</button>
        </form>
      </div>
    );
  }
}