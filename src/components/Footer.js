import React from "react";

import "./styles/footer.css";
import "./styles/font-awesome/font-awesome.min.css";

import logo from "../../public/images/london-physio-lab-logo.png";

export default () => (
  <footer className="footer-distributed">
    <div className="footer-left">
      <span>
        <img src={logo} className="logo" alt="London Physio Lab" />
      </span>
      <p className="footer-links" />
      <p className="footer-company-name">London Physio Lab &copy; 2017</p>
      <br />
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Flondonphysiolab%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=false&colorscheme=dark&height=80&appId"
        width="150"
        height="80"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
      />
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
          <i className="fa fa-phone" />
        </a>
        <p>
          <a href="tel:+442033030275">+44 (0) 203 303 0275</a>
        </p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p>
          <a href="mailto:aisling@londonphysiolab.com">email me</a>
        </p>
      </div>
    </div>

    <div className="footer-right">
      <p className="footer-company-about">
        <span>your wellbeing = my focus</span>
        Don't let an injury derail your training program, book today for an
        expert opinion on management!
      </p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/aiskeating">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://www.linkedin.com/in/aisling-keating-51b85433">
          <i className="fa fa-linkedin" />
        </a>
      </div>
    </div>
  </footer>
);
