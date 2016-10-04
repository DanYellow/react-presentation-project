import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'
import Messages from './containers/Messages'

let store    = createStore(reducer);


render(
  <Provider store={store}>
    <Messages />
  </Provider>,
  document.getElementById('root')
)