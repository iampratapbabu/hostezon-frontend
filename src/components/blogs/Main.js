import React,{Fragment,useContext,useEffect} from 'react';
import Blogs from './Blogs';

import AuthContext from '../../context/auth/AuthContext';


import BlogForm from './BlogForm';
 import Search from './Search';




const Main = () => {
    const authContext = useContext(AuthContext);
    useEffect(()=>{
      authContext.loadUser();
      //eslint-disable-next-line
    },[]);
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