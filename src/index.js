import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import Matrix from './Matrix';

ReactDOM.render(<Matrix />, document.getElementById('canvas-wrapper'));
ReactDOM.render(<Clock />, document.getElementById('root'));
