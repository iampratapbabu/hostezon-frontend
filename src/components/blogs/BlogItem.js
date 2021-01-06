import React,{Fragment,useContext} from 'react';
import BlogsContext from '../../context/blogs/BlogsContext'

const BlogItem = ({blog}) => {

    const blogsContext = useContext(BlogsContext);
    const {title,category,body,id} = blog;
    const onDelete = ()=>{
        blogsContext.deleteBlog(id);
    };
    return (
        <Fragment>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
                <h2>{title.charAt(0).toUpperCase()+title.slice(1)}</h2>
                <hr/>
                <h3>category{' - '} <span className={'badge '+(category === 'Tech'?'badge-success':'badge-primary')}>{category}</span></h3>
                <hr/>
                <h4> {body}</h4>
                <hr/>
                <h5>Written by:{}</h5>
                <button className="btn btn-dark" >Edit</button>
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
                
                </div>
        </div>    
        </Fragment>
    )
}

export default BlogItem;
