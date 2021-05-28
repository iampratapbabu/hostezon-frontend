import React, { Fragment,useState,useEffect,useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';


const Login = (props) => {
const authContext = useContext(AuthContext);
const {register,isAuthenticated} = authContext;

useEffect(()=>{
  if(isAuthenticated){
    props.history.push('/blogs');
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
    console.log("submit");
  }

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