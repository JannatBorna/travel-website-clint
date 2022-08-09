import React from 'react';
import layout1 from '../../../../images/layout-10.jpg';
import layout2 from '../../../../images/layout-2.jpg';
import layout3 from '../../../../images/layout-3.jpg';
import layout4 from '../../../../images/layout-4.jpg';
// import layout5 from '../../../../images/layout-5.jpg';
import { Container } from 'react-bootstrap';
import layout7 from '../../../../images/layout-13.jpg';
import layout6 from '../../../../images/layout-6.jpg';
import layout8 from '../../../../images/layout-8.jpg';
import layout9 from '../../../../images/layout-9.jpg';
import './FiveBanner.css';

const FiveBanner = () => {
return (
  <div className="bg-black">
    <Container>
      <div className="p-4">
        <h2 className="text-white">
          Travel{" "}
          <span className="theme-color">can improve your personality</span>
        </h2>
        <h3 className="text-white p-2">Travel Gallery</h3>
      </div>
      <div class="row">
        <div class="column">
          <img src={layout1} alt="..." />
          <img src={layout2} alt="..." />
        </div>

        <div class="column">
          <img src={layout3} alt="..." />
          <img src={layout8} alt="..." />
        </div>

        <div class="column">
          <img src={layout7} alt="..." />
          <img src={layout6} alt="..." />
        </div>

        <div class="column">
          <img src={layout4} alt="..." />
          <img src={layout9} alt="..." />
        </div>
      </div>
    </Container>
  </div>
);
};

export default FiveBanner;