import React, { Component } from "react";
import "./list.css";
import ListItem from '../ListItem/ListItem';
import * as apiCalls from '../../api';

export default class List extends Component {

    state = {
        items: []
    }

    async loadItems() {
        let items = await apiCalls.getItems();
        this.setState({ items });
    }

    async addItem(val) {
        await apiCalls.createItem(val);
        this.setState({ items: [...this.state.items] })
        this.loadItems();
    }

    async deleteItem(id) {
        await apiCalls.removeItem(id);
        const items = this.state.items.filter(item => item._id !== id);
        this.setState({ items })
    }


    componentWillMount() {
        this.loadItems();
    }


    render() {
        const items = this.state.items.map((item) => (
            <ListItem key={item._id} stuff={item} />
        ));
        return (
            <div>
                {items.length > 0 ? items : 'Loading'}
            </div>
        )
    }
}
