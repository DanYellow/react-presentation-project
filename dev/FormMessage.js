import React from 'react'

export default class FormMessage extends React.Component {

  /**
   * Submit form
   * @param  {Object} e html object
   * @return null
   */
  submitMessage (e) {
    e.preventDefault();
    
    this.props.onSubmitCallback(this.textarea.value);
  }


  render() {
    const { messages } = this.props;
    return (
      <div>
        <h1>{ messages }</h1>
        <form onSubmit={(e) => this.submitMessage(e)}>
          <textarea ref={(c) => this.textarea = c} autoFocus="true" />
          <button>Add message</button>
        </form>
      </div>
    );
  }
}