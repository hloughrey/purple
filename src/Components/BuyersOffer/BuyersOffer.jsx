import React, { Component } from 'react';
import './BuyersOffer.scss';
import Button from '../Button/Button.jsx';

export default class BuyersOffer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-6'>
        <div className='buyer-offer-container'>
          <h2>Buyer Offer</h2>
          <hr />
          <b>£179,000</b>
          <p>Subject to offer qualification by Purple Bricks</p>
          <div className='row'>
            <div className='col-md-6'>
              <Button text={'VIEW COMMENTS'} />
            </div>
            <div className='col-md-3'>
              <p>Date 24/10/2013</p>
            </div>
            <div className='col-md-3'>
              <p>Time 20:17</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
