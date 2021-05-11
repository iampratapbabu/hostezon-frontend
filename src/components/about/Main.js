import React,{Fragment} from 'react';
// import './about-style.css';
import admin from '../../images/admin-img.jpeg';

import About from './About';
import Features from './Features';


const Main =() => {
  return (
    <Fragment>
    <div class="container">
    <About/>
    <Features/>
    </div>
    </Fragment>
  );
}

export default Main;
