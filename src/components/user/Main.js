import React,{Fragment,Component} from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Users from './Users';

const Main = () => {
    return (
        <Fragment>
        <Header/>
            <div className="container">
            <h1>This is the user files</h1>
            <Users/>
            </div>
            
        <Footer/>
        </Fragment>
        
    )
}

export default Main;
