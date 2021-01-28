import React, { Fragment,useState,useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import Header from '../../layout/Header';

const Signup = () => {
const alertContext = useContext(AlertContext);
const {setAlert} = alertContext;

  const [user,setUser] = useState({
    username:'',
    email:'',
    password:'',
    passwordConfirm:''
  });

  const {username,email,password,passwordConfirm} = user;

  const onChange = e =>setUser({...user,[e.target.name]:e.target.value});
  
  const onSubmit = (e) =>{
    e.preventDefault();
      console.log("before alert submit");
    if(username==='' || email==='' || password ===''){
      // setAlert('Please Fill all the fields','danger');
      console.log("please fill all the fields");
    }else if(password !== passwordConfirm){
      // setAlert("Password do not match","secondary");
      console.log("password do not match");
    }else{
      console.log("after alert passed submit");
    }
  };

    return (
        <Fragment>
        <Header/>
      <div className="container">
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
          <div class="form-group">
            <input type="text" class="form-control" name='username' value={username} onChange={onChange} placeholder="Enter Your Name"/>
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