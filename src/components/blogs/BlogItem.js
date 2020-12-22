import React,{Fragment} from 'react'

const BlogItem = ({blog}) => {

    const {title,category,body} = blog;

    return (
        <Fragment>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div>
                <h2>{title.charAt(0).toUpperCase()+title.slice(1)}</h2>
                <hr/>
                <h3>category{' - '} <span className={'badge '+(category === 'Tech'?'badge-success':'badge-primary')}>{category}</span></h3>
                <hr/>
                <h4> {body}</h4>
                </div>
        </div>    
        </Fragment>
    )
}

export default BlogItem;
