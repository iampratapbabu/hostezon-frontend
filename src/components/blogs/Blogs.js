import React,{Fragment,useContext} from 'react';
import BlogsContext from '../../context/blogs/BlogsContext';
import BlogItem from './BlogItem';



const Blogs = () => {
    //blogsContext me b lower case hai matlb new variable blogsContext define kiye hain
    //and blogs usi me se extract kr rhe hain
    const blogsContext = useContext(BlogsContext); 
    

    const {blogs} = blogsContext;

    return (
        <Fragment>
        <div>
            {blogs.map(blog => (
                <BlogItem key={blog.id} blog={blog} />
                ))};
        </div>
        </Fragment>
    )
}

export default Blogs;

