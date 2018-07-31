import React, { Component } from "react";
import "./list.css";
import ListItem from "../ListItem/ListItem";
import * as apiCalls from "../../api";

import { connect } from "react-redux";
import { loadItem } from "../../actions/itemActions";

class List extends Component {

    state = {
        isFading: false
    }

  async loadItems() {
    let items = await apiCalls.getItems();
    this.props.loadItem(items);
  }

  fadeList = () => {
      const isFading = true;
      this.setState({ isFading })
  }

  componentWillMount() {
    this.loadItems();
    this.fadeList();
  }

  render() {
    const items = this.props.items.map(item => (
      <ListItem stuff={item} key={item.id} />
    ));
    const noItems =
    <article>
        <div className="countdown">
            <h3 className="no-items">No Countdown Events</h3>
        </div>
    </article>;
    
    return <div className={this.state.isFading ? 'list fade-list' : 'list'}>{this.props.items.length > 0 ? items : noItems}</div>;
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
