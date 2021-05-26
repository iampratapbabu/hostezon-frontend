import React,{Fragment,useState,useEffect,useContext} from 'react'
import BlogsContext from '../../context/blogs/BlogsContext';
import { UPDATE_BLOG } from '../../context/types';


const BlogForm = () => {
    const blogsContext=useContext(BlogsContext);
    const{addBlog,current,clearBlog,updateBlog}  = blogsContext;
    
    useEffect(() => {
        if(current !== null){
            setBlog(current);
        }else{
            setBlog({
                title:"",
                body:"",
                category:"Tech"
            });
        }
        
    }, [blogsContext,current]);


    const [blog, setBlog] = useState({
        title:"",
        body:"",
        category:"Tech"
    });

    const {title,body,category} = blog;

    const onChange = (e) =>{
        setBlog({...blog,[e.target.name]:e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        if(current == null){
            addBlog(blog);
        }else{
            updateBlog(blog);
            clearBlog();
            
        }
        setBlog({
            title:"",
            body:"",
            category:"Tech"
        });
        
        
       
    };

    const clearAll = (blog) =>{
        clearBlog(blog);
       
    };

    return (
        <Fragment>
        
            <div class="container">
            <h2>{current ? 'Edit Blog':'Create New Blog'}</h2>


            <div className="form-group">
            <form onSubmit={onSubmit}>
                
                <input className="form-control" 
                type="text" 
                placeholder="Enter Title" 
                name="title" 
                value={title} 
                onChange={onChange} />

                <h5 className="mt-3">Category</h5>
                <input type="radio"
                className="mr-1"
                name="category"
                value="Tech"
                onChange={onChange}
                checked={category === 'Tech'}
                />Tech{' '}

                
                <input type="radio"
                className="mr-1"
                name="category"
                value="Non-Tech"
                onChange={onChange}
                checked={category === 'Non-Tech'}
                />Non-Tech{' '}

                
                <input type="radio"
                className="mr-1"
                name="category"
                value="Confess"
                onChange={onChange}
                checked={category ==='Confess'}
                />Confess{' '}

                
                <textarea 
                className="form-control mt-3" 
                type="text" 
                placeholder="Write Here..." 
                name="body" 
                value={body} 
                onChange={onChange} />

                <input type="submit"
                value = {current?'Submit':'Add Blog'}
                
                className="btn btn-primary mt-2"/>
               




            </form>
            </div>
            {current &&(
                <div>
                <button className = "btn btn-secondary"
                onClick={clearAll}>Clear</button>

                </div>
            )}
            </div>
        </Fragment>
        
    )
}

export default BlogForm;
