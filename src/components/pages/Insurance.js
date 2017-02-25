import React from 'react';

import './styles/insurance.css';

import bupa from '../../../public/images/logos/bupa.jpg';
import axa from '../../../public/images/logos/axa.jpg';
import aviva from '../../../public/images/logos/aviva.jpg';
import simply from '../../../public/images/logos/simply.jpg';
import vitality from '../../../public/images/logos/vitality.jpg';
import wpa from '../../../public/images/logos/wpa.jpg';

export default () => (
  <div className='content-container insurance'>
    <div className='text'>
      <h2>Insurance</h2>
      <p>Trusted by major UK and international private health insurance companies for Physiotherapy treatment including Bupa, Axa (Notting hill only), Aviva, vitality health, simply health and WPA.</p>
      <p>Axa PPP patients are only accepted at the Notting hill branch.</p>
      <p>Please bring your authorisation code to your first session if your insurance is with PPP or Bupa and we will bill them directly. For all other insurance companies, you will need to pay for the sessions, we’ll send you the invoice and you can reclaim the costs off the insurance company. Easy.</p>
      <p>If you have any questions at all please contact our Notting Hill or Moorgate clinics today.</p>
    </div>
    <div className='logos'>
      <img src={bupa} alt='bupa' />
      <img src={axa} alt='axa' />
      <img src={aviva} alt='aviva' />
      <img src={simply} alt='simply' />
      <img src={vitality} alt='vitality' />
      <img src={wpa} alt='wpa' />
    </div>
  </div>
);