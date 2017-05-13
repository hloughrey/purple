import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <button class="btn btn-default" type="submit">{this.props.text}</button>
    )
  }
}
