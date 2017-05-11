import React, { Component } from 'react';
import './Status.scss';

export default class Status extends Component {
  constructor() {
    super()
  };

  render() {
    return (
      <div className='col-md-10 col-md-offset-1'>
        <div className='status-bar'>
          <h2><span>Status: </span>Withdrawn</h2>
        </div>
      </div>
    )
  }
}
