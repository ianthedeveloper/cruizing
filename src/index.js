import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {jokes} from './jokes';
import Joke from './Joke';
import 'tachyons';

ReactDOM.render(
  <div>
    <Joke id={jokes[0].id} question={jokes[0].question} answer={jokes[0].answer} />
    <Joke id={jokes[1].id} question={jokes[1].question} answer={jokes[1].answer} />
  </div>,
  document.getElementById('root')
);
