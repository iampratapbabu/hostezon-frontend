import React,{Fragment,useContext,useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BlogsContext from '../../context/blogs/BlogsContext';



const SingleBlog = () =>{
    const blogsContext = useContext(BlogsContext);
    const {singleBlog} = blogsContext;

    const {id} = useParams();

    const [blog,setBlog] = useState({});

    useEffect(()=>{
        const singleBlog = async() =>{
            const res = await axios.get(`${process.env.REACT_APP_URL}/hostezon/v1/blogs/single/${id}`);
            console.log(res.data);
            const {title,body,category,comments,createdBy,createdAt,rating,views} = res.data.blog;
            setBlog({
                title,
                body,
                category,
                comments,
                createdBy,
                createdAt,
                rating,
                views
            });
        };
        singleBlog();
        
  
    //eslint-disable-next-line
    },[]);

    const {title,body,category,comments,rating,createdAt,createdBy,views} = blog;
    
    return(
        <Fragment>
            <div>
            
                <h1>{title}</h1>
                <hr/>
                <h4>{body}</h4>
                <hr/>
                
                <hr/>
                <h4>{category}</h4>
                <h4>{rating}</h4>
                <h4>{createdAt}</h4>
                
                <h4>{views}</h4>
                <p>{id}</p>
                
            </div>
        </Fragment>
    );
};

export default SingleBlog;