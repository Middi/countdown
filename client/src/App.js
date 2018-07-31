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

  state = {
    isTop: true,
    closeToTop: false
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 20;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
      const closeToTop = window.scrollY > 62;
      if (closeToTop !== this.state.closeToTop) {
        this.setState({ closeToTop })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className={this.state.closeToTop ? 'header-ontop' : ''}>
        <div className={this.state.isTop ? 'animate animated-out' : 'animate animated'}></div>
        <h1 className={this.state.isTop ? 'header-title title-out' : 'header-title title-animate'}>CountDown</h1>
        <Add top={this.state.isTop} />
        </header>
        
        <List />
        {this.props.isModalOpen && <Modal />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(App);
