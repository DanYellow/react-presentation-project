import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import Messages from './Messages'

render(
  <Messages />,
  document.getElementById('root')
)