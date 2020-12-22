import React,{Fragment} from 'react';
import Blogs from './Blogs';
import Header from '../../layout/Header';
import Footer from '../../../src/layout/Footer';



const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <h1>This is the Blogs Main Page</h1>
         <Blogs/>
       </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main