import React, { Component } from 'react';

import Style from './Header.scss';

export default class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <a href='http://www.bbc.com/' className='navbar-brand'>Logo</a>
            <button className='navbar-toggle' type='button' data-toggle='collapse' data-target='#navbar-main'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          </div>
          <div id='navbar-main' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav pull-right headings'>
              <li className='page-name'>Secure negotiation centre</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
