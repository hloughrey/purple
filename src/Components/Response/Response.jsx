import React, { Component } from 'react';
import './Response.scss';
import Button from '../Button/Button.jsx';

export default class Response extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-12  container-important reponse'>
        <h2 className='important'>Response</h2>
        <hr />
        <p className='message important'>You have withdrawn your acceptance of the offer</p>
        <div className='reponse-metadata'>
          <Button text={'VIEW COMMENTS'} style='default'/>
          <p>Date 24/10/2013</p>
          <p>Time 21:05</p>
        </div>
      </div>
    )
  }
}
