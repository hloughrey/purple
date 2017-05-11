import React, { Component } from 'react';
import './BuyerDetails.scss';

export default class BuyerDetails extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-10 col-md-offset-1'>
        <div className='buyer-details-container'>
          <h2>Buyer Details</h2>
          <p className='pull-right'>hide</p>
          <hr />
          <div className='buyers-details-table'>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>Mr David Shepard</td>
                </tr>
                <tr>
                  <th>Buyer position:</th>
                  <td>Property to set - 20 weeks on the market</td>
                </tr>
                <tr>
                  <th>Finance poition:</th>
                  <td>Mortgage Required - approved</td>
                </tr>
                <tr>
                  <th>Timescale:</th>
                  <td>Would like to move in 10 weeks - no chain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
