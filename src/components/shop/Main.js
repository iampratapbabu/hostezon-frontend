import React,{Fragment} from 'react';

import Header from './Header';
import Footer from '../../../src/layout/Footer';

const Main = () => {
    return (
        <Fragment>
     
        <Header/>
        <div class = "container">
         <h1>This is the Shop part</h1>
       </div>
       <Footer/>
        </Fragment>
       
    )
}

export default Main