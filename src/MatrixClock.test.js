import React from 'react';
import ReactDOM from 'react-dom';
import App from './MatrixClock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
