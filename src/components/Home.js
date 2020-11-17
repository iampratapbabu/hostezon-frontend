import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import Header from '../layout/Header';
import Carousel from '../layout/Carousel';
import About from '../layout/About';
import Footer from '../layout/Footer';
import Login from '../layout/Login';
import Features from '../layout/Features';



const Home = () => {
  return (
    <Fragment> 
    <Header/>
    <div class="container">
   
    <Login/>
    <p>New To hosteZON <Link to = '/signup'>Signup</Link></p>
    <About/>
    <Features/>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default Home;
