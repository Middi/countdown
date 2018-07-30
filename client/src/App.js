import React, { Component } from 'react';
import './App.css';
import Add from './components/Add/Add';
import List from './components/List/List';
import Modal from './components/Modal/modal';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Add />
        <List />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
