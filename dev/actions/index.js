// import * as ActionTypes from '../constants/ActionTypes'

export const addMessage = function (text) {
  return {
    type: 'ADD_MESSAGE',
    text
  }
}

export const updateTextarea = function (text) {
  return {
    type: 'UPDATE_TEXTAREA',
    text
  }
}
