import React,{useReducer} from 'react';
import * as uuid from 'uuid';
import BlogsContext from './BlogsContext';
import BlogsReducer from './BlogsReducer';

import {
 ADD_BLOG,
 DELETE_BLOG,
 SET_BLOG, 
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
            "id": {
              "$oid": "5f899de21444225f503765c6"
            },
            "views": 425,
            "rating": 5,
            "title": "My Fifteen Blog Post",
            "slug": "my-fifteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech"
          },{
            "id": {
              "$oid": "5f8d842b6b73fe95dcae057e"
            },
            "views": 425,
            "rating": 5,
            "title": "My Sixteen Blog Post",
            "slug": "my-sixteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech"
          },{
            "id": {
              "$oid": "5f9000e12993178f98e22677"
            },
            "views": 425,
            "rating": 5,
            "title": "My Seventeen Blog Post",
            "slug": "my-seventeen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech"
          },{
            "id": {
              "$oid": "5f90016cb7e07a1c5ce708e8"
            },
            "views": 425,
            "rating": 5,
            "title": "My Eighteen Blog Post",
            "slug": "my-eighteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Tech"
          },{
            "id": {
              "$oid": "5f9169e4987d14585cedfc9d"
            },
            "views": 425,
            "rating": 5,
            "title": "My Ninteen Blog Post",
            "slug": "my-ninteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech"
          },{
            "id": {
              "$oid": "5fad6fc2534a2d2f60501ff8"
            },
            "views": 400,
            "rating": 4,
            "title": "My Twenty Blog Post",
            "slug": "my-twenty-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech"
          }
            
        ]
            
    };

    const [state,dispatch] = useReducer(BlogsReducer,initialState);

//     ADD_BLOG,

const addBlog = (blog) =>{
  blog.id = uuid.v4();
  dispatch({type:ADD_BLOG,payload:blog});
};

//  DELETE_BLOG,

const deleteBlog = (id) =>{
  dispatch({type:DELETE_BLOG,payload:id});
};


//  SET_BLOG, 


//  CLEAR_BLOG, 


//  UPDATE_BLOG, 


//  FILTER_BLOGS, 


//  CLEAR_FILTER, 

 return(
     <BlogsContext.Provider
     value={{
         blogs:state.blogs,
         addBlog,
         deleteBlog
         }}>
         {props.children}
     </BlogsContext.Provider>
 )
    
};

export default BlogsState;


