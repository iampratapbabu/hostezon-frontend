import React,{Fragment} from 'react';
import Blogs from './Blogs';
import Header from '../../layout/Header';
import Footer from '../../../src/layout/Footer';



const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <hr/>
         <Blogs/>
       </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main