import React,{Fragment,useContext,useState,useEffect} from 'react'
import BlogsContext from '../../context/blogs/BlogsContext'

const Search = () => {

    const blogsContext = useContext(BlogsContext);
    const [text,setText] = useState('');

   

    const onChange = (e) =>{
        console.log("button clicked");
    };

    return (
        <Fragment>
            <div>
             <form>
                 <input type ="text" name="text" value={text}
                 placeholder="Search Blogs"
                 onChange={onChange} />

                 <input type="submit" className="btn btn-primary"/>
             </form>
            </div>
        </Fragment>
       
    )
}

export default Search
