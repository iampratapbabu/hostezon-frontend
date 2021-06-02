import React,{useEffect,useReducer} from 'react';
import * as uuid from 'uuid';
import axios from 'axios';
import dotenv from 'dotenv';
import BlogsContext from './BlogsContext';
import BlogsReducer from './BlogsReducer';

import {
 GET_BLOGS,
 ADD_BLOG,
 DELETE_BLOG,
 SET_CURRENT_BLOG, 
 CLEAR_BLOG, 
 UPDATE_BLOG, 
 FILTER_BLOGS, 
 CLEAR_FILTER, 
 SET_ALERT,
 REMOVE_ALERT,
} from '../types';


const BlogsState = (props) =>{
    const initialState ={
        blogs:[],
        current:null,
        filtered:null    
    };

    const [state,dispatch] = useReducer(BlogsReducer,initialState);

//populating blogs
// useEffect(()=>{

//   //async function bana ke populate krte hain
//   async function loadFunction(){
//     const res = await axios.get(`${process.env.REACT_APP_URL}/hostezon/v1/blogs`);
//     console.log(res.data);
    
//   }
//   loadFunction();

// //eslint-disable-next-line
// },[]);

//Get Blogs
const getBlogs = async () =>{
  const config = {
    headers:{
      'Content-Type':"application/json",
      'x-auth-token':localStorage.getItem('token')
    }
  };
  console.log("Get Blogs runs");
  console.log(process.env.REACT_APP_VAR);
  
  try{
    const res =await axios.get(`${process.env.REACT_APP_URL}/hostezon/v1/blogs`,config);
    dispatch({type:GET_BLOGS,payload:res.data.blogs});
  

  }catch(err){
    console.log(err);
  }


};

const singleBlog = () =>{
  console.log("Geting single blog");
};

// ADD_BLOG,
const addBlog = async (blog) =>{
  const config = {
    headers:{
      'Content-Type':"application/json",
      'x-auth-token':localStorage.getItem('token')
    }
  };
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}/hostezon/v1/blogs/create-blog`,blog,config);
    dispatch({type:ADD_BLOG,payload:res.data});

  }catch(err){
    console.log(err);
  }
  blog.id = uuid.v4();
  dispatch({type:ADD_BLOG,payload:blog});
};

//  DELETE_BLOG,
const deleteBlog = (id) =>{
  dispatch({type:DELETE_BLOG,payload:id});
};


//  SET_CURRENT_BLOG, 
const setCurrentBlog = blog =>{
  dispatch({type:SET_CURRENT_BLOG,payload:blog});
};


//  CLEAR_BLOG, 
const clearBlog = blog =>{
  dispatch({type:CLEAR_BLOG,payload:blog});
};


//  UPDATE_BLOG, 
const updateBlog = blog =>{
  dispatch({type:UPDATE_BLOG,payload:blog});
};

//  FILTER_BLOGS, 
const filterBlog = text =>{
  dispatch({type:FILTER_BLOGS,payload:text});
};

//  CLEAR_FILTER, 
const clearFilter = blog =>{
  dispatch({type:CLEAR_FILTER});
};

 return(
     <BlogsContext.Provider
     value={{
         blogs:state.blogs,
         current:state.current,
         filtered:state.filtered,
         getBlogs,
         singleBlog,
         addBlog,
         deleteBlog,
         setCurrentBlog,
         updateBlog,
         clearBlog,
         filterBlog,
         clearFilter
         }}>
         {props.children}
     </BlogsContext.Provider>
 )
    
};

export default BlogsState;


