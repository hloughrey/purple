import React, { Component } from 'react';
import './BuyersOffer.scss';
import Button from '../Button/Button.jsx';

export default class BuyersOffer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-12 container-body buyers-offer'>
        <h2 className='primary'>Buyer Offer</h2>
        <hr />
        <p className='offer-price'>£179,000</p>
        <p>Subject to offer qualification by Purple Bricks</p>
        <div className='buyers-offer-metadata'>
          <Button text={'VIEW COMMENTS'} style='default'/>
          <p>Date 24/10/2013</p>
          <p>Time 20:17</p>
        </div>
      </div>
    )
  }
}
