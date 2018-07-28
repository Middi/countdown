import React, { Component } from "react";
import "./listitem.css";

export default class ListItem extends Component {
  render() {
    return (
            <article>
                <div className="title">
                    <h3>COUNTDOWN TO</h3>
                    <h1>NEW YORK</h1>
                </div>
                <div className="countdown">
                    <div className="countdown-inner">
                        <h2 className="days">10</h2>
                        <h2 className="seperator">:</h2>
                        <h2 className="hours">2</h2>
                        <h2 className="seperator">:</h2>
                        <h2 className="mins">33</h2>
                    </div>
                </div>
                <div className="btn-bar">
                    <div className="btn-bar-child view-btn">VIEW</div>
                    <div className="btn-bar-child edit-btn">EDIT</div>
                </div>
            </article>
        )
  }
}
