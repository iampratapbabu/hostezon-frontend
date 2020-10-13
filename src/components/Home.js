import React,{Fragment} from 'react'
import Carousel from '../layout/Carousel';

import About from './About';
import Footer from '../layout/Footer';


const Home =() => {
  return (
    <Fragment>

    <Carousel/>
    <div class="container">
    <About/>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default Home;
