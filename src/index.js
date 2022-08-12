import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './profile/App';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  fullName='Mootez Zemmel' 
          bio='I’m 2nd year prepatory student, I’m interested in software and web development, I’m currently learning react and node js' 
          profession='FullStack Developper'
          user="Mootez"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
