import React,{Fragment} from 'react';

import Academics from './Academics';
import Header from '../../layout/Header';
import Footer from '../../../src/layout/Footer';

const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
        <hr/>
         
         <Academics/>
        </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main
