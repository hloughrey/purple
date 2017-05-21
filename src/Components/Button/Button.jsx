import React, { Component } from 'react';
import Style from './Button.scss';

export default class Button extends Component {
  constructor() {
    super()
  }

  render() {
    let style = {
      color: "#ffffff"
    };
    return (
      <button className={`btn btn-default ${this.props.style}`} onClick={this.props.onClick} type="submit" style={style}>{this.props.text}</button>
    )
  }
}
