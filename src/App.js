import React,{Fragment} from 'react';
import { Route,Switch } from "react-router-dom";


//Context api files
//blogs context
import BlogsState from './context/blogs/BlogsState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';





import Academics from './components/academics/Main';
import Blogs from './components/blogs/Main';
import About from './components/about/Main';
import Users from './components/user/Main';
import Error from './layout/Error';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Alerts from './layout/Alerts';

//subcomponents









const App =() => {
  return (
    <AuthState>
    <BlogsState>
    <AlertState>
    <Fragment>
    <Alerts/>
    <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path='/academics' component={Academics} />
    <Route exact path='/blogs' component={Blogs} />
   
    <Route exact path='/users' component={Users} />
    <Route exact path='/about' component={About} />
    <Route exact path='/signup' component={Signup} />
    
    <Route exact path='*' component={Error} />
    </Switch>
    
    
  
    </Fragment>
    </AlertState>
    </BlogsState>
    </AuthState>
    
  );
}

export default App;
