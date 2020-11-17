import React,{Fragment} from 'react';

import Academics from './Academics';
import Header from './Header';
import Footer from '../../../src/layout/Footer';

const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <Academics/>
       </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main
