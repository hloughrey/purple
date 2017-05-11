import React, { Component } from 'react';
import './HomePage.scss';

import Header from '../Header/Header.jsx';
import Status from '../Status/Status.jsx';
import Property from '../Property/Property.jsx';
import BuyerDetails from '../BuyerDetails/BuyerDetails.jsx';
import BuyersOffer from '../BuyersOffer/BuyersOffer.jsx';
import Response from '../Response/Response.jsx';
import ReopenNegotiations from '../ReopenNegotiations/ReopenNegotiations.jsx';

export default class HomePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Status />
        </div>
        <div className='container'>
          <Property />
        </div>
        <div className='container'>
          <BuyerDetails />
        </div>
        <div className='container'>
          <div className='row'>
            <BuyersOffer />
            <Response />
          </div>
        </div>
        <ReopenNegotiations />
      </div>
    )
  }
}
