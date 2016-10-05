import React from 'react';
import { storiesOf, action } from '@kadira/storybook';


import MyFirstComponent from './../MyFirstComponent';

storiesOf('MyFirstComponent', module)
  .add('normal', () => (
    <MyFirstComponent />
  ))
  .add('with props', () => (
    <MyFirstComponent text="Hello world" />
  ))