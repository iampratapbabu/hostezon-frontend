import React,{Fragment,useContext} from 'react';
import {Link} from "react-router-dom";

import BlogsContext from '../../context/blogs/BlogsContext';


const BlogItem = ({blog}) => {

    const blogsContext = useContext(BlogsContext);
    const {setCurrentBlog,clearBlog,deleteBlog} = blogsContext;
    const {title,category,body,id,rating,createdBy,createdAt} = blog;
    const onDelete = ()=>{
        deleteBlog(id);
        clearBlog();
    };
    

    
    return (
        <Fragment>
       
        <div class="p-3 mb-5 bg-white rounded">
            <div>
            <p>{id}</p>
                <h2>{title.charAt(0).toUpperCase()+title.slice(1)}</h2>
                <hr/>
                <h3>category{' - '} <span className={'badge '+(category === 'Tech'?'badge-success':'badge-primary')}>{category}</span></h3>
                <p>Rating:{' '}{rating}/5</p>
                {/*<p>CreatedAt:{createdAt}</p>*/}
                <hr/>
                <h4> {body}</h4>
                <hr/>
                {/*<h5>Written by:{createdBy.name}</h5>*/}
                <button className="btn btn-dark mr-1" onClick={()=>setCurrentBlog(blog)} >Edit</button>
                <button className="btn btn-danger mr-1" onClick={onDelete}>Delete</button>
                <Link to={`/blogs/${id}`} className="btn btn-primary">Details</Link>
                </div>
        </div>    
        
        </Fragment>
    )
}

export default BlogItem;
