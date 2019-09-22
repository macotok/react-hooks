import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import firebase from 'firebase';
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
