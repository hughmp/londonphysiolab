import React from 'react';

import './styles/fees.css';

export default () => (
  <div className="content-container">
    <div className='fees text'>
      <h2>Fees</h2>
      <ul>
        <li><i className="fa fa-angle-right" aria-hidden="true" /> Initial senior Physiotherapy assessment (1hr) :  <span>£100</span></li>
        <li><i className="fa fa-angle-right" aria-hidden="true" /> Follow up Physiotherapy session (1/2hr) :  <span>£65</span></li>
        <li><i className="fa fa-angle-right" aria-hidden="true" /> Physiotherapy Home Visits (1hr) :  <span>poa</span></li>
        <li><i className="fa fa-angle-right" aria-hidden="true" /> Run gait assessment (1hr) :  <span>£85</span></li>
        <li><i className="fa fa-angle-right" aria-hidden="true" /> Workstation assessment :  <span>poa</span></li>
      </ul>
    </div>
  </div>
); 
