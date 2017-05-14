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
      <div className='col-md-12'>
        <h2 className='primary'>Re-open Negotiations</h2>
        <hr />
        <div className='row'>
          <div className='col-md-9'>
            <div className='expert-negotiate'>
              <p className='primary'>Would you like your Expert, Robert White, to negotiate on your behalf? It's completely free!</p>
            </div>
            <div className='col-md-3'>
              <Button text={'NEGOTIATE FOR ME'}/>
            </div>
          </div>
        </div>
        <div className='new-offer'>
          <p className='primary'>Enter an offer you would be willing to accept:</p>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            £<Input />
          </div>
          <div className='col-md-6'>
            <Button text={'SUBMIT OFFER'} />
          </div>
        </div>
        <Button text={'ADD COMMENTS'} />
      </div>

    )
  }
}
