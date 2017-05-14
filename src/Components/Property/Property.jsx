import React, { Component } from 'react';
import './Property.scss';
import PropertyImage from '../../assets/property.jpg';
import Button from '../Button/Button.jsx';

export default class Property extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-12'>
        <div className='property-container'>
          <h2>The Property</h2>
          <hr />
          <div className='row'>
            <div className='col-md-2'>
              <img src={PropertyImage} />
            </div>
            <div className='col-md-6'>
              <p>Eddington House, 16 Wigginton Road,<br />Tamworth, B79 8PB</p>
            </div>
            <div className='col-md-4'>
              <ul className='aking-price'>
                <li>Asking Price</li>
                <li>£189,950</li>
                <li><Button text={'VIEW EXTRAS INCLUDED'} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
