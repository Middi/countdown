import React, { Component } from 'react';
import './style.css';
import * as apiCalls from '../../api';


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalActions';
import { addItem } from '../../actions/itemActions';

const uuidv4 = require('uuid/v4');

class Modal extends Component {

    state = {
        newEvent: {},
        startDate: moment()
    }

    change = e => {
        // Spread state into new variable
        const NS = { ...this.state };
        // Change what needs to be changed
        NS.newEvent[e.target.name] = e.target.value;
        // Set state with new version of state
        this.setState(NS);
    }


    clickSubmit = e => {
        e.preventDefault();
        const date = this.state.startDate._d;
        const name = this.state.newEvent.name;
        
        const NS = {
            id: uuidv4(),
            date,
            name
        }

        this.addItem(NS);
        const newState = { ...this.state };
        newState.event = {};
        this.setState(newState);
        this.props.toggleModal();
    }


    handleChange = date => {
        this.setState({
            startDate: date
        });
    }


    async addItem(val) {
        await apiCalls.createItem(val);
        this.props.addItem(val);
    }

    render() {
        return (
            <div className="modal-bg">
                <div className="modal">
                <div
                    onClick={this.props.toggleModal} 
                    className="delete-btn">
                        <p className="rotate">+</p>
                </div>
                    <h1 className="event-title">Add Event</h1>
                    <hr />
                    <form>
                        <label>Name</label>
                        <input type="text" name="name" onKeyUp={e => this.change(e)} />
                        <label>Date</label>
                        <DatePicker className="react-100-width"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                        <label>Time</label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="LT"
                            timeCaption="Time"
                        />
                        <button className="submit-button"onClick={(e) => this.clickSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
    addItem: item => dispatch(addItem(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
