import React, { Component } from 'react';
import './App.css';
import Add from './components/Add/Add';
import List from './components/List/List';
import Modal from './components/Modal/modal';


import { connect } from 'react-redux';

// What parts of store are available to the component
const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen
  });
  

class App extends Component {

  render() {
    return (
      <div className="App">
        <Add />
        <List />
        {this.props.isModalOpen && <Modal />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(App);
