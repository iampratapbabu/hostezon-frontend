import React,{Fragment} from 'react';
// import './about-style.css';
import admin from '../../images/admin-img.jpeg';
import Header from '../../../src/layout/Header';

import Footer from '../../../src/layout/Footer';


const Main =() => {
  return (
    <Fragment>
    <Header/>
     <h2 class="title">About The Developer</h2>
    <div class="row">
    <div class="col-sm-6">
   
    <img class="block-img" src={admin} width="300" height="300"/>
    </div>
    <div class="col-sm-6 block-about">

    <p>
    Hello World!<p>
    </p>My Name is Tej Pratap. It is one of my dream to Develop a Website to connect everyone
    of my college on a single platform. and providing them all the stuffs that they require,
    Therefore ,I Developed this website.
    </p>
    <hr></hr>
    <h3>Technologies Used:</h3>

     <p>-> Node.js and Express.js for Backend</p>
     <p>-> React.js for Frontend</p>
     <p>-> mongoDB for Database</p>
     <p>-> MVC architecture</p>
     <p>-> REST api for connecting Frontend and Backend</p>
     <p>-> CSS and Bootstrap for Design</p>



    </div>
    </div>

    
    <Footer/>
    </Fragment>
  );
}

export default Main;
