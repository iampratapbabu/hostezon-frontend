import React,{Fragment} from 'react';
import Blogs from './Blogs';
import Header from '../../layout/Header';

import BlogForm from './BlogForm';
 import Search from './Search';
import Footer from '../../../src/layout/Footer';




const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <hr/>
         
         <BlogForm/>
         <hr/>
         <Search/>
         <hr/>
         <Blogs/>
       </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main