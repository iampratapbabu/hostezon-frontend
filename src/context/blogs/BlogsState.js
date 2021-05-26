import React,{useEffect,useReducer} from 'react';
import * as uuid from 'uuid';
import axios from 'axios';
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
        blogs:[
            
          {
            "id": "5f899de21444225f503765c6",
            
            "views": 425,
            "rating": 4.5,
            "title": "My Fifteen Blog Post",
            "slug": "my-fifteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Tech",
            "createdBy": {
              "role": "admin",
              "_id": "5f776190cd4e523c74ecd53d",
              "name": "Tej Pratap",
              "passwordResetExpires": "2021-05-09T06:48:58.853Z",
              "passwordResetToken": "3cac80766d2e5e722d192bf6792654462bf4fa9a0271e95e038785db9a101fd8"
            },
            "createdAt":"2020-10-15T11:00:25.151+00:00"
          },
          {
            "id":"5f8d842b6b73fe95dcae057e",
            "views": 425,
            "rating": 4.0,
            "title": "My Sixteen Blog Post",
            "slug": "my-sixteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech",
            "createdBy": {
              "role": "admin",
              "_id": "5f776190cd4e523c74ecd53d",
              "name": "Tej Pratap",
              "passwordResetExpires": "2021-05-09T06:48:58.853Z",
              "passwordResetToken": "3cac80766d2e5e722d192bf6792654462bf4fa9a0271e95e038785db9a101fd8"
            },
            "createdAt":"2020-10-15T11:00:25.151+00:00"
          },
          {
            "id":"5f9000e12993178f98e22677",
            
            "views": 425,
            "rating": 5,
            "title": "My Seventeen Blog Post",
            "slug": "my-seventeen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Confess",
            "createdBy": {
              "role": "admin",
              "_id": "5f776190cd4e523c74ecd53d",
              "name": "Tej Pratap",
              "passwordResetExpires": "2021-05-09T06:48:58.853Z",
              "passwordResetToken": "3cac80766d2e5e722d192bf6792654462bf4fa9a0271e95e038785db9a101fd8"
            },
            "createdAt":"2020-10-15T11:00:25.151+00:00"
          }
        ],
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
  
  try{
    const res =await axios.get(`${process.env.REACT_APP_URL}/hostezon/v1/blogs`);
    dispatch({type:GET_BLOGS,payload:res.data.blogs});
    //console.log(res.data.blogs);

  }catch(err){
    console.log(err);
  }


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


