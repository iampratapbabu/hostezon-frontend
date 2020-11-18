import React,{Fragment} from 'react';

import Academics from './Academics';
import Search from './Search';
import Header from './Header';
import Footer from '../../../src/layout/Footer';

const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <Search/>
         <Academics/>
        </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main
