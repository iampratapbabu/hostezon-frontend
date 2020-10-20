import React,{Fragment} from 'react'
import Header from '../layout/Header';
import Carousel from '../layout/Carousel';
import About from '../layout/About';
import Footer from '../layout/Footer';


const Home =() => {
  return (
    <Fragment> 
    <Header/>
    <div class="container">
    <Carousel/>
    <About/>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default Home;
