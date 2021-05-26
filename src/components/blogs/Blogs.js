import React,{Fragment,useContext,useEffect} from 'react';
import BlogsContext from '../../context/blogs/BlogsContext';
import BlogItem from './BlogItem';



const Blogs = () => {
    //blogsContext me b lower case hai matlb new variable blogsContext define kiye hain
    //and blogs usi me se extract kr rhe hain
    const blogsContext = useContext(BlogsContext);
    const {blogs,getBlogs} = blogsContext;
    useEffect(() => {
        console.log("Use effect fired");
      getBlogs();
    }, []);

    return (
        <Fragment>
        {blogs != null ? <div>
            {blogs.map(blog => (
                <BlogItem key={blog.id} blog={blog} />
            ))}
            </div>: 'Blogs Loading...'}
            
        
        </Fragment>
    )
}

export default Blogs;

