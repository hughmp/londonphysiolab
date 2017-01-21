import React from 'react';

import './styles/footer.css';
import './styles/font-awesome/font-awesome.min.css';

import logo from '../../public/images/london-physio-lab-logo.png';

export default () => (
  <footer className="footer-distributed">

    <div className="footer-left">
      <span>
        <img src={logo} className="logo" alt="London Physio Lab" />
      </span>
      <p className="footer-links" />
      <p className="footer-company-name">London Physio Lab &copy; 2017</p>
    </div>

    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>Lucerne Clinic</span>
          Notting Hill, W8 4ED
        </p>
      </div>
      <div>
        <a href="tel:+442033030275">
          <i className="fa fa-phone"></i>
        </a>
        <p>
          <a href="tel:+442033030275">
            +44 (0) 203 303 0275
          </a>
        </p>
      </div>
      <div>
      <i className="fa fa-envelope"></i>
      <p><a href="mailto:aisling@londonphysiolab.com">Click to e-mail</a></p>
      </div>
    </div>

    <div className="footer-center">

      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>London Physio Lab</span>
          London Wall, EC2M 5PP
        </p>
      </div>
      <div>
        <a href="tel:+442073746181">
          <i className="fa fa-phone"></i>
        </a>
        <p>
          <a href="tel:+442073746181">
            +44 (0) 20 7374 6181
          </a>
        </p>
      </div>
      <div>
      <i className="fa fa-envelope"></i>
      <p><a href="mailto:aisling@londonphysiolab.com">Click to e-mail</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>your wellbeing = my focus</span>
        A short sentence here describing why they should get in touch would be rad ..!
      </p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/aiskeating"><i className="fa fa-facebook"></i></a>
        <a href="/"><i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/aisling-keating-51b85433"><i className="fa fa-linkedin"></i></a>
        <a href="/"><i className="fa fa-github"></i></a>
      </div>
    </div>

  </footer>
);
