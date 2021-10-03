import React from 'react';
import './assets/css/App.css';
import Welcome from './components/welcome';

const App = () => {
  return (
    <body>
    <div className="container">
      <div class="welcome">
      <Welcome/>
      </div>
      <br/>
      <a class="btn" href="www.a">Not Martin?</a>
    </div>
    </body>
  );
}

export default App;