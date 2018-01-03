// imports React, ReactDOM, the stylesheet (index.css), registerServiceWorker.js, and the app components (App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

// renders App class to the page
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
