import React from 'react';

import './styles/home.css';

import home from '../../../public/images/home.jpg';

export default () => (
  <div className='content-container'>
    <div className='image'>
      <img src={home} alt='Aisling Keating' />
      <h1>your wellbeing = my focus</h1>
    </div>
    <div className='text'>
      <h1>Why me?</h1>
      <br />
      <ul>
        <li><i className="fa fa-check" aria-hidden="true"></i> Providing experienced chartered Physiotherapy, over 10 years experience</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Support you on your road to recovery</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Open and clear communication throughout</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Give you the knowledge you need to properly manage your condition</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Get to the cause of your symptoms to ensure it doesn't return</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Gold standard 1 hour initial consultation</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Work with the best specialists, surgeons and other top notch professionals, if no change in 3 sessions you can be referred to the right specialist for you for further investigations</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Individual treatment and rehabilitation programs designed specifically for you, with your aims in mind</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Special interest in feet and all overuse running injuries</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Special interest in chronic centralised pain, low back and neck pain</li>
        <li><i className="fa fa-check" aria-hidden="true"></i> Special interest in shoulder, hip and knee rehabilitation</li>
      </ul>
      <br />
    </div>
  </div>
);
