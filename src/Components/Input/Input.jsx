import React, { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <input type='number' className='form-control' id='offer-input' />
    )
  }
}
