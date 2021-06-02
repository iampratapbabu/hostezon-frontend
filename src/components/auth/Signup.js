import React, { Fragment,useState,useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/AuthContext';



const Signup = (props) => {

const authContext = useContext(AuthContext);

const {register,isAuthenticated} = authContext;

useEffect(()=>{
  if(isAuthenticated){
    props.history.push('/blogs');
  }
  //eslint-disable-next-line
},[]);

  const [user,setUser] = useState({
    name:'',
    email:'',
    password:'',
    passwordConfirm:''
  });

  const {name,email,password,passwordConfirm} = user;

  const onChange = e =>setUser({...user,[e.target.name]:e.target.value});
  
  const onSubmit = (e) =>{
    e.preventDefault();
      
    if(name==='' || email==='' || password ===''){
     
      alert('Please Fill all the fields mere bhai');
      
    }else if(password !== passwordConfirm){
      // setAlert("Password do not match","secondary");
      alert("password do not match");
    }else{
      
      register({
        name,
        email,
        password,
        passwordConfirm
      });
      console.log(name,email,password,passwordConfirm);
      alert("Successfully registered");
      //after successful registration we redirect to blogs
      //props.history.push('/blogs');
    }
  };

    return (
        <Fragment>
       
      <div className="container">
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
          <div class="form-group">
            <input type="text" class="form-control" name='name' value={name} onChange={onChange} placeholder="Enter Your Name"/>
            </div>
            <div class="form-group">
            <input type="email" class="form-control" name='email' value={email} onChange={onChange} placeholder="Enter Your Email"/>
            </div>
       
          <div class="form-group">
          <input type="password" class="form-control" name='password' value={password} onChange={onChange} placeholder="Enter Password"/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name='passwordConfirm' value={passwordConfirm} onChange={onChange} placeholder="Confirm Password"/>
            </div>

            <input type="submit" value="Register" className="btn btn-secondary"/>
            </form>
        </div>
      
        </Fragment>
    )
}

export default Signup;