import React,{Fragment,Component} from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Users from './Users';

const Main = () => {
    return (
        <Fragment>
        <Header/>
            <div className="container">
            <h2>All Users</h2>
            <hr/>
            <Users/>
            </div>
            
        <Footer/>
        </Fragment>
        
    )
}

export default Main;
