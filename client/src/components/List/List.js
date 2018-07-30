import React, { Component } from "react";
import "./list.css";
import ListItem from '../ListItem/ListItem';
import * as apiCalls from '../../api';

import { connect } from 'react-redux';
import {loadItem} from '../../actions/itemActions';

// What parts of store are available to the component
const mapStateToProps = state => ({
    items: state.items
  });
  
  // What actions are available to the component
  const mapDispatchToProps = dispatch => ({
    // available in Forecast class as this.props.loadForecast()
    loadItem: item => dispatch(loadItem(item))
  });


class List extends Component {

    async loadItems() {
        let items = await apiCalls.getItems();
        this.props.loadItem(items);
    }


    // async deleteItem(id) {
    //     await apiCalls.removeItem(id);
    //     const items = this.state.items.filter(item => item._id !== id);
    //     this.setState({ items })
    // }


    
  componentWillMount() {
    this.loadItems();
    // this.addItem({
    //     name: 'parker2',
    //     date: '12647124812'
    // })
  }


    render() {
        const items = this.props.items.map(item => (
            <ListItem stuff={item} key={item._id} />
        ));
        return (
            <div>
                {this.props.items.length > 0 ? items : 'Loading'}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List);
  