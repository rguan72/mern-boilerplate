import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const container = document.createElement('div');
document.body.appendChild(container);
document.title = 'MERN stack'

ReactDOM.render(<App />, container);