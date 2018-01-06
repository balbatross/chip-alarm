import React, { Component } from 'react';
import logo from './logo.svg';
import DateDisplay from './components/date';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <DateDisplay />
       </div>
    );
  }
}

export default App;
