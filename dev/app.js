import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import MyFirstComponent from './MyFirstComponent'


render(
  <MyFirstComponent />,
  document.getElementById('root')
)