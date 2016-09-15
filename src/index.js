import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


const Main = () => {

  return (
    <div>
      <App />
    </div>
  );
}

if (document) {
  ReactDOM.render(<Main />, document.getElementById('main'));
}
