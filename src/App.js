import React, { Component } from 'react';
import './styles/App.css';
import Home from './views/home';

class App extends Component {
  render() {	  
    return (
      <div className="App">
		<Home/>
      </div>
    );
  }
}

export default App;
