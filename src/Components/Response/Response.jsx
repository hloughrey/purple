import React, { Component } from 'react';
import './Response.scss';
import Button from '../Button/Button.jsx';

export default class Response extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-6 container-important reponse'>
        <h2 className='important'>Response</h2>
        <hr />
        <p className='message'>You have withdrawn your acceptance of the offer</p>
        <div className='row'>
          <div className='col-md-6'>
            <Button text={'VIEW COMMENTS'} style='default'/>
          </div>
          <div className='col-md-3'>
            <p>Date 24/10/2013</p>
          </div>
          <div className='col-md-3'>
            <p>Time 21:05</p>
          </div>
        </div>
      </div>
    )
  }
}
