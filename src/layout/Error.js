import React from 'react';
import {Link} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


const Error = () => {
    return (
        <>
        <Header/>
        
        <div className="container">
            <h1>ERROR 404</h1>
            <p>You have Entered The Wrong URL Please check or Return to <Link to ="/"><span>Home</span></Link></p>
        </div>
        <Footer/>
        </>
    )
}

export default Error
