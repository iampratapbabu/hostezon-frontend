import React, { Fragment } from 'react';
import Header from '../../layout/Header';

const Login = () => {
    return (
        <Fragment>
        <Header/>
        <div className="container">

        <div className="form-decoration">
        <h4>Login</h4>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="Email"/>
           
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        
        <button type="submit" className ="btn btn-dark mt-2">Submit</button>
        </div>

        </div>
       
  

        </div>
           
        </Fragment>
    )
}

export default Login;