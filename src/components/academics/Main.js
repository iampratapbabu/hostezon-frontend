import React,{Fragment} from 'react';

import Academics from './Academics';

const hello = () =>{
    console.log("hello function is running");
    return(
        <h1>hello function</h1>
    )
}


const Main = () => {
    hello();
    return (
        <Fragment>
     
        
        <div class = "container">
      
         <h1>Academics</h1>
        {hello()}
        </div>
        
        </Fragment>
         
       
    )
}

export default Main
