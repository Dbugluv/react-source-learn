import React, { Component, Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App author={'dxy'}/>, document.getElementById('app'));

module.hot && module.hot.accept();