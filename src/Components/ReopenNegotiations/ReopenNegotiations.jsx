import React, { Component } from 'react';
import './ReopenNegotiations.scss';
import Button from '../Button/Button.jsx';

export default class ReopenNegotiations extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='container'>
        <div className='col-md-10 col-md-offset-1'>
          <div className='reopen-negotiations-container'>
            <h2>Re-open Negotiations</h2>
            <hr />
            <div className='row'>
              <div className='col-md-9'>
                <div className='expert-negotiate'>
                  <p>Would you like your Expert, Robert White, to negotiate on your behalf? It's completely free!</p>
                </div>
                <div className='col-md-3'>
                  <Button text={'NEGOTIATE FOR ME'}/>
                </div>
              </div>
            </div>
            <div className='new-offer'>
              <p>Enter an offer you would be willing to accept:</p>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                £<input type='number' className='form-control' id='offer-input' />
              </div>
              <div className='col-md-6'>
                <Button text={'SUBMIT OFFER'} />
              </div>
            </div>
            <Button text={'ADD COMMENS'} />
          </div>
        </div>
      </div>

    )
  }
}
