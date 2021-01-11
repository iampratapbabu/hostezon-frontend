import React,{Fragment} from 'react';
import Blogs from './Blogs';
import Header from './Header';
 import BlogForm from './BlogForm';
import Footer from '../../../src/layout/Footer';



const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <hr/>
         
         <BlogForm/>
         <hr/>
         <Blogs/>
       </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main