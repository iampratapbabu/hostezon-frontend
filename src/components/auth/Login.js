import React, { Fragment,useState,useEffect,useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';


const Login = (props) => {
  
const authContext = useContext(AuthContext);
const {isAuthenticated,login} = authContext;

useEffect(()=>{
  if(isAuthenticated)
    alert("You are already Logged In");
  else{
    
  }
  //eslint-disable-next-line
},[]);

  const [user,setUser] = useState({
    
    email:'',
    password:''
  });

  const {email,password} = user;

  const onChange = e =>setUser({...user,[e.target.name]:e.target.value});
  const onSubmit = (e) =>{
    e.preventDefault();
    if(email === "" || password === "")
      alert("Please Fill out The required fields");
    
    login({
      email,
      password
    });
    console.log(email,password);
    alert("You have been successfully logged in");
    setUser({
      email:"",
      password:""
    })
  };

    return (
        <Fragment>
        
      <div className="container">
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
          
            <div className="form-group">
            <input type="email" className="form-control" name='email' value={email} onChange={onChange} placeholder="Enter Your Email"/>
            </div>
       
          <div className="form-group">
          <input type="password" className="form-control" name='password' value={password} onChange={onChange} placeholder="Enter Password"/>
          </div>
          

            <input type="submit" value="LogIn" className="btn btn-primary mb-1"/>
            </form>
            <h5>Not having an account</h5>
            <Link to='/signup' className="btn btn-dark">Signup Now !</Link>
        </div>
      
        </Fragment>
    )
}

export default Login;