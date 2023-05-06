// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//get a reference to the div with ID root (in index.html)
const el = document.getElementById('root');

// tell react to take control on that element
const root = ReactDOM.createRoot(el);

// create a component in App.js. Import App

//show the component on the screen
root.render(<App />);