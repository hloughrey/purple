import React, { Component } from 'react';
import './BuyerDetails.scss';

export default class BuyerDetails extends Component {
  constructor() {
    super()

    this.state = {
      buyerDetails: {
        visible: true
      }
    };

    this.detailsVisibility = this.detailsVisibility.bind(this);
  }

  detailsVisibility(e) {
    this.setState({
      buyerDetails: {
        visible: !this.state.buyerDetails.visible
      }
    });
  }

  render() {
    if(this.state.buyerDetails.visible) {
      return (
        <div className='col-md-12 buyer-details'>
          <div className='row buyer-details-heading'>
            <div className='col-md-6'>
              <h2 className='primary'>Buyer Details</h2>
            </div>
            <div className='col-md-6'>
              <p className='primary pull-right' onClick={this.detailsVisibility}>HIDE <span className='glyphicon glyphicon-chevron-up'></span></p>
            </div>
          </div>
          <hr />
          <div id='buyers-details-table' className='buyers-details-table'>
            <table className='table'>
              <tbody>
                <tr>
                  <th className='primary'>Name:</th>
                  <td>Mr David Shepard</td>
                </tr>
                <tr>
                  <th className='primary'>Buyer position:</th>
                  <td>Property to set - 20 weeks on the market</td>
                </tr>
                <tr>
                  <th className='primary'>Finance poition:</th>
                  <td>Mortgage Required - approved</td>
                </tr>
                <tr>
                  <th className='primary'>Timescale:</th>
                  <td>Would like to move in 10 weeks - no chain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return (
        <div className='col-md-12 buyer-details'>
          <div className='row buyer-details-heading'>
            <div className='col-md-6'>
              <h2 className='primary'>Buyer Details</h2>
            </div>
            <div className='col-md-6'>
              <p className='primary pull-right' onClick={this.detailsVisibility}>SHOW <span className='glyphicon glyphicon-chevron-down'></span></p>
            </div>
          </div>
          <hr />
        </div>
      )
    }
  }
}
