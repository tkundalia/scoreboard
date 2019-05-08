import React, { Component } from 'react';

export default class AddPlayer extends Component {
  render() {
        //when render is called? console.log('PROPS:', this.props, 'STATES:', this.state)
    return (
      <div className="add-player">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}