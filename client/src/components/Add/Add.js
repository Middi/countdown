import React, { Component } from "react";
import "./add.css";

import { connect } from 'react-redux';
import {toggleModal} from '../../actions/modalActions';

// What parts of store are available to the component
const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen
  });
  
  // What actions are available to the component
  const mapDispatchToProps = dispatch => ({
    // available in Forecast class as this.props.loadForecast()
    toggleModal: () => dispatch(toggleModal())
  });

class Add extends Component {


  render() {
    return (
            <div onClick={this.props.toggleModal} className="add-btn">
                +
            </div>
        )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
