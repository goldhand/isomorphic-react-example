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

export default Main;

if (typeof document !== 'undefined') {
  // set fake delay to show App is not rendered before document is loaded
  setTimeout(() => {
    ReactDOM.render(<Main />, document.getElementById('main'));
    console.log('mounted');
  }, 2000);
}
