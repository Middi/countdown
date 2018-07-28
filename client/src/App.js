import React, { Component } from 'react';
import './App.css';
import Add from './components/Add/Add';
import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Add />
        <List />
      </div>
    );
  }
}

export default App;
