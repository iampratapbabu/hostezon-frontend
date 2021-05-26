import React,{Fragment,useContext} from 'react';
import BlogsContext from '../../context/blogs/BlogsContext'

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
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
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
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
                
                </div>
        </div>    
        </Fragment>
    )
}

export default BlogItem;
