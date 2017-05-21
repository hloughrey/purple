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
        <div className='container-fluid'>
          <div className='col-xs-12 col-sm-offset-1 col-sm-10 col-lg-offset-2 col-lg-8'>
            <div className='col-md-12 container-status'>
              <Status />
            </div>
            <div className='col-md-12 container-body'>
              <Property />
            </div>
            <div className='col-md-12 container-body'>
              <BuyerDetails />
            </div>
            <div className='col-md-12'>
              <div className='row offer-response'>
                <div className='col-md-6 container-buyers-offer'>
                  <BuyersOffer />
                </div>
                <div className='col-md-6 container-response-warning'>
                  <Response />
                </div>
              </div>
            </div>
            <div className='col-md-12 container-body'>
              <ReopenNegotiations />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
