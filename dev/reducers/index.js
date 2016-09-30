import { combineReducers } from 'redux'

import * as ActionTypes from '../constants/ActionTypes'

const messages = function (state = '', action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.text;
    default:
      return state;
  }
}

const textarea = function (state = '', action) {
  switch (action.type) {
    case 'UPDATE_TEXTAREA':
      return action.text;
    default:
      return state;
  }
}

const reducers = combineReducers({
  messages,
  textarea
});

export default reducers
