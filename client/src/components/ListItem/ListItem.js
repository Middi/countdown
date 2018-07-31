import React, { Component } from "react";
import "./listitem.css";
import * as apiCalls from "../../api";

import { connect } from "react-redux";
import { deleteItem } from "../../actions/itemActions";

class ListItem extends Component {
    handleDelete = () => {
        const id = this.props.stuff.id;
        this.deleteItem(id);
        this.props.deleteItem(id);
    };

    async deleteItem(id) {
        await apiCalls.removeItem(id);
    }

    render() {
        const { stuff } = this.props;

        const date_future = new Date(stuff.date);
        const date_now = Date.now();

        // get total seconds between the times
        let delta = Math.abs(date_future - date_now) / 1000;
        // calculate (and subtract) whole days
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;
        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        // calculate (and subtract) whole minutes
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        return (
            <article>
                <div className="title">
                    <h3>COUNTDOWN TO</h3>
                    <h1>{stuff.name}</h1>
                </div>
                <div className="countdown">
                    <div className="countdown-inner">
                        <div className="count days">
                            <h2>{days}</h2>
                            <h4>DAYS</h4>
                        </div>
                        <h2 className="seperator">:</h2>
                        <div className="count hours">
                            <h2>{hours}</h2>
                            <h4>HOUR</h4>
                        </div>
                        <h2 className="seperator">:</h2>
                        <div className="count mins">
                            <h2>{minutes}</h2>
                            <h4>MINS</h4>
                        </div>
                    </div>
                </div>
                <div
                    onClick={this.handleDelete}
                    className="delete-btn">
                        <p className="rotate">+</p>
                </div>
                
            </article>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(ListItem);
