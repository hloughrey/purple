import React, { Component } from 'react';
import './Response.scss';

export default class Response extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-4 col-md-offset-1'>
        <div className='response-container'>
          <h2>Response</h2>
        </div>
      </div>

    )
  }
}
