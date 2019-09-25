import React, { Component } from "react";

export default class RandomButton extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <button onClick={this.props.randomClick}>Add Random Contact</button>
        </React.Fragment>
      </div>
    );
  }
}
