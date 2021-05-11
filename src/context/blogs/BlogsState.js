import React,{useReducer} from 'react';
import * as uuid from 'uuid';
import BlogsContext from './BlogsContext';
import BlogsReducer from './BlogsReducer';

import {
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
            "category": "Tech"
          },
          {
            "id":"5f8d842b6b73fe95dcae057e",
            "views": 425,
            "rating": 4.0,
            "title": "My Sixteen Blog Post",
            "slug": "my-sixteen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Non-Tech"
          },
          {
            "id":"5f9000e12993178f98e22677",
            
            "views": 425,
            "rating": 5,
            "title": "My Seventeen Blog Post",
            "slug": "my-seventeen-blog-post",
            "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
            "category": "Confess"
          }
        ],
        current:null,
        filtered:null    
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


