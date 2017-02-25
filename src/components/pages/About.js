import React from 'react';

// import './styles/home.css';

import ais from '../../../public/images/about.jpg';

export default () => (
  <div className='content-container'>
    <div className='about image'>
      <img src={ais} alt='Aisling Keating' />
    </div>
    <div className='about text'>
      <h2>About Me</h2>
      <h3>Aisling Keating BSc (Hons)</h3>
      <p>
        With over ten years of Physiotherapy experience, including working in sports injury clinics in New Zealand and Australia; private practices in London from Fulham to Harley street; Aisling has treated patients in both the public and private sectors. Her clients have ranged from rugby and football players in New Zealand and Australia to medical and surgical hospital patients in Limerick, Ireland.
      </p>
      <p>
        Aisling is passionate about physiotherapy and is dedicated to her patients, she gets them back to their best by treating the underlying dysfunction, improving movement patterns, posture and easing pain. She does this through a combination of myofascial release, IMS trigger point dry needling, clinical Pilates and functional specific exercise thearapy.
      </p>
      <p>
        After two years in the Public sector, where she specialised in orthopaedics and musculosketetal patients, Aisling traveled to New Zealand. While there, she worked in a private practice for 18 months, as well as providing pitch side and clinic based treatments to various rugby and soccer teams. She then moved across the Tasman Sea to Melbourne where she continued to work in the private sector in a sports clinic that specialised in IMS trigger point dry needling and whiplash associated disorders.
      </p>
      <p>
        After two years in Melbourne, Aisling decided to move back closer to home and started with Six Physio in April 2012, having completed a cert in orthopaedic spinal manual therapy and becoming qualified in DMA clinical Pilates. Aisling worked with Six Physio in London for four years, the past year in its flagship Harley Street practice. While there, she treated patients with varying injuries and conditions, from CRPS to acute low back pain, working closely with some of London’s finest pain consultants and spinal surgeons.
      </p>
      <p>
        In her spare time, Aisling is an ex ballet dancer, still enjoys playing hockey and is a keen runner.  Has completed four marathons in the past few years, plus a half Iron Man competition in 2015.  Aisling has had plenty of personal experience with injuries too, which is a massive help clinically as she knows how frustrating carrying an injury can be.
      </p>
    </div>
  </div>
);
