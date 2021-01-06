import React,{Fragment,useState,useContext} from 'react'
import BlogsContext from '../../context/blogs/BlogsContext';

import Header from './Header';

const BlogForm = () => {
    const blogsContext=useContext(BlogsContext);


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
        blogsContext.addBlog(blog);
        console.log(blog);
        setBlog({
            title:"",
            body:"",
            category:"Tech"
        });
    }

    return (
        <Fragment>
        <Header/>
            <div class="container">
            <h2>Create New Blog</h2>


            <div className="form-group">
            <form onSubmit={onSubmit}>
                
                <input className="form-control" 
                type="text" 
                placeholder="Enter Title" 
                name="title" 
                value={title} 
                onChange={onChange} />

                <h5>Category</h5>
                <input type="radio"
                name="category"
                value="Tech"
                onChange={onChange}
                checked={category === 'Tech'}
                />Tech{' '}

                
                <input type="radio"
                name="category"
                value="Non-Tech"
                onChange={onChange}
                checked={category === 'Non-Tech'}
                />Non-Tech{' '}

                
                <input type="radio"
                name="category"
                value="Confess"
                onChange={onChange}
                checked={category ==='Confess'}
                />Confess{' '}

                
                <textarea 
                className="form-control" 
                type="text" 
                placeholder="Write Here..." 
                name="body" 
                value={body} 
                onChange={onChange} />

                <input type="submit"
                value = "Add Blog"
                className="btn btn-primary"/>
               




            </form>
            </div>
            </div>
        </Fragment>
        
    )
}

export default BlogForm;
