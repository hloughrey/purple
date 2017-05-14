import React, { Component } from 'react';
import './ReopenNegotiations.scss';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';

export default class ReopenNegotiations extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='col-md-12 negotiations'>
        <h2 className='primary'>Re-open Negotiations</h2>
        <hr />
        <div className='row expert'>
          <div className='col-md-9'>
            <p className='primary ask-for-expert'>Would you like your Expert, Robert White, to negotiate on your behalf? It's completely free!</p>
          </div>
          <div className='col-md-3'>
            <Button text={'NEGOTIATE FOR ME'} style='purple'/>
          </div>
        </div>
        <div className='offer'>
          <p className='primary heading'>Enter an offer you would be willing to accept:</p>
          <div className='row'>
            <div className='col-md-6 offer-price'>
              <span className='heading'>£</span>
              <Input />
              <Button text={'ADD COMMENTS'} style='purple'/>
            </div>
            <div className='col-md-6'>
              <Button text={'SUBMIT OFFER'} style='blue'/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
