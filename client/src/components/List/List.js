import React, { Component } from "react";
import "./list.css";
import ListItem from "../ListItem/ListItem";
import * as apiCalls from "../../api";

import { connect } from "react-redux";
import { loadItem } from "../../actions/itemActions";

class List extends Component {

  async loadItems() {
    let items = await apiCalls.getItems();
    this.props.loadItem(items);
  }

  componentWillMount() {
    this.loadItems();
  }

  render() {
    const items = this.props.items.map(item => (
      <ListItem stuff={item} key={item.id} />
    ));
    return <div className="list">{this.props.items.length > 0 ? items : "Loading"}</div>;
  }
}


const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  loadItem: item => dispatch(loadItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
