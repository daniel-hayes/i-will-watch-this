import React, { Component } from 'react';

export default class AddRemoveButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleListStatus: 'Add'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event);
    let listState = this.state.toggleListStatus === 'Add' ? 'Remove' : 'Add';
    this.setState({
      toggleListStatus: listState
    });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.toggleListStatus}</div>;
  }
}

export default AddRemoveButton;
