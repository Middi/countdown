import React from 'react';
import './style.css';


const Modal = props => (
    <div className="modal-bg">
        <div className="modal">
            <span onClick={() => props.closeModal()} className="close">+</span>
            <h1 className="event-title">Add Event</h1>
            <form>
                <label>Event</label>
                <input type="text" name="name" onKeyUp={e => props.change(e)} />
                <label>Location</label>
                <input type="text" name="location" onKeyUp={e => props.change(e)} />
                <label>Start Date</label>
                <input type="date" name="dateStart" onKeyUp={e => props.change(e)} />
                <label>Start Time</label>
                <input type="time" name="timeStart" onKeyUp={e => props.change(e)} />
                <label>End Date</label>
                <input type="date" name="dateEnd" onKeyUp={e => props.change(e)} />
                <label>End Time</label>
                <input type="time" name="timeEnd" onKeyUp={e => props.change(e)} />
                <label>Shift Type</label>
                <select name="shiftType" onChange={e => props.change(e)}>
                    <option value="1000" name="shiftType">Full Day</option>
                    <option value="500" name="shiftType">Half Day</option>
                </select>
                <button onClick={(e) => props.clickSubmit(e)}>Submit</button>
            </form>
        </div>
    </div>
)

export default Modal;