import React,{Fragment,useContext} from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';

const Header =() => {
const authContext = useContext(AuthContext);
const {register,isAuthenticated,user,logout} = authContext;


 
  //eslint-disable-next-line

  

  return (
    <Fragment>

    <nav class="navbar navbar-expand-lg navbar-light transparent">
    <div class="container">
      <Link class="navbar-brand" to="/"><h4>hoste<span>ZON</span></h4></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item btn-margin">
            <Link class="nav-link" to="/academics">Academics</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link btn-margin" to="/blogs">Blogs</Link>
          </li>
         
          <li class="nav-item btn-margin">
            <Link class="nav-link" to="/users">Users</Link>
          </li>
          <li class="nav-item btn-margin">
            <Link class="nav-link" to="/login">{/*isAuthenticated ? user.name:'Login'*/}Login</Link>
         </li>
         <li class="nav-item btn-margin">
            <Link class="nav-link" onClick={logout}>Logout</Link>
         </li>
          
        </ul>
      </div>
        </div>
    </nav>

    </Fragment>
  );
}

export default Header;
