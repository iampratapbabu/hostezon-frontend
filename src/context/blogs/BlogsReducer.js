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


   export default (state,action) =>{
       switch(action.type){
           case ADD_BLOG:
               return{
                ...state,
                blogs:[...state.blogs,action.payload]
               };
           case DELETE_BLOG:
               return{
                   ...state,
                   blogs:state.blogs.filter(blog => blog.id !== action.payload)
               };    
            case SET_CURRENT_BLOG:
                return{
                    ...state,
                    current:action.payload
                };
            case UPDATE_BLOG:
                return{
                    ...state,
                    blogs:state.blogs.map(blog =>blog.id === action.payload.id?action.payload:blog)
                };    
            case CLEAR_BLOG:
                return{
                    ...state,
                    current:null
                };       
                
          default:
              return state;         
       }
   }