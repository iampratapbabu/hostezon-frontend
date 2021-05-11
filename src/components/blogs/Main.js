import React,{Fragment} from 'react';
import Blogs from './Blogs';

import BlogForm from './BlogForm';
 import Search from './Search';




const Main = () => {
    return (
        <Fragment>
     
        
        <div class = "container">
         <hr/>
         
         <BlogForm/>
         <hr/>
         <Search/>
         <hr/>
         <Blogs/>
       </div>
       
        </Fragment>
       
    )
}

export default Main