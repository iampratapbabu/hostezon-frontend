import React,{Fragment} from 'react'
import Header from '../layout/Header';
import Carousel from '../layout/Carousel';
import About from '../layout/About';
import Footer from '../layout/Footer';
import Login from '../layout/Login';
import Signup from '../layout/Signup';
import Features from '../layout/Features';



const Home = () => {
  return (
    <Fragment> 
    <Header/>
    <div class="container">
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
