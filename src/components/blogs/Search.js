import React,{Fragment,useContext,useState,useEffect,useRef} from 'react'
import BlogsContext from '../../context/blogs/BlogsContext'

const Search = () => {
    const text = useRef('');
    const blogsContext = useContext(BlogsContext);
    
    const {filtered,filterBlog,clearFilter} = blogsContext;

    useEffect(()=>{
        if(filtered === null)
            text.current.value='';
    });
   

    const onChange = (e) =>{
        if(text.current.value !== '')
            filterBlog(e.target.value);
        else
            clearFilter();
    };

    return (
        <Fragment>
            <div>
             <form>
                 <input ref={text} type ="text" name="text" value={text}
                 placeholder="Search Blogs"
                 onChange={onChange} />

                 <input type="submit" className="btn btn-primary"/>
             </form>
            </div>
        </Fragment>
       
    )
}

export default Search
