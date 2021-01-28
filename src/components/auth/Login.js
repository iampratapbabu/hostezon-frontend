import React, { Fragment,useState } from 'react';
import Header from '../../layout/Header';
import {Link} from 'react-router-dom';

const Signup = () => {

  const [user,setUser] = useState({
    
    email:'',
    password:''
  });

  const {email,password} = user;

  const onChange = e =>setUser({...user,[e.target.name]:e.target.value});
  const onSubmit = (e) =>{
    e.preventDefault();
    console.log("submit");
  }

    return (
        <Fragment>
        <Header/>
      <div className="container">
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
          
            <div class="form-group">
            <input type="email" class="form-control" name='email' value={email} onChange={onChange} placeholder="Enter Your Email"/>
            </div>
       
          <div class="form-group">
          <input type="password" class="form-control" name='password' value={password} onChange={onChange} placeholder="Enter Password"/>
          </div>
          

            <input type="submit" value="LogIn" className="btn btn-secondary"/>
            </form>
            <Link to='/signup'>Signup</Link>
        </div>
      
        </Fragment>
    )
}

export default Signup;