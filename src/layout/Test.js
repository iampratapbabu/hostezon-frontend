import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';

const Test  = () =>{

  const name = "Tej Pratap";
  const loading = false;
  return (
    <Fragment>
    <div className="container">
    {loading?<h1>Loading...</h1>:<h1>{name}</h1>}
    <i className="fab fa-github fa-4x"></i>
    </div>
     
    </Fragment>
  )
}

export default Test;
