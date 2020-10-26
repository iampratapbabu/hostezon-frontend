import React,{Fragment} from 'react'
import Header from '../layout/Header';
import Carousel from '../layout/Carousel';
import About from '../layout/About';
import Footer from '../layout/Footer';
import Login from '../layout/Login';
import Signup from '../layout/Signup';
import Features from '../layout/Features';
import Test from '../layout/Test';



const Home = () => {
  return (
    <Fragment> 
    <Header/>
    <div class="container">
    <Test/>
    <Login/>
    <Signup/>
    <About/>
    <Features/>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default Home;
