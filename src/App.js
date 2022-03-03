import React,{Fragment} from 'react';
import { Route,Switch } from "react-router-dom";


//Context api files
//blogs context
import BlogsState from './context/blogs/BlogsState';
import AuthState from './context/auth/AuthState';






import Academics from './components/academics/Main';
import Blogs from './components/blogs/Main';
import SingleBlog from './components/blogs/SingleBlog';

import About from './components/about/Main';
import Users from './components/user/Users';
import Courses from './components/courses/Main';

import Error from './layout/Error';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

import setAuthToken from './utils/setAuthToken';

//subcomponents
import Header from './layout/Header';
import Footer from './layout/Footer';





const App =() => {
 
  return (
    <AuthState>
    <BlogsState>
    

    <Fragment>
    <Header/>
    <hr/>
    
    <Switch>
    <Route exact path='/' component={About} />
    <Route exact path='/academics' component={Academics} />
    <Route exact path='/blogs' component={Blogs} />
    <Route exact path='/blogs/:id' component={SingleBlog} />
    <Route exact path='/courses' component={Courses} />
    <Route exact path='/users' component={Users} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='*' component={Error} />
    </Switch>
    <p>There are many hooks to react firebase</p>
    <Footer/>
    </Fragment>


    
    </BlogsState>
    </AuthState>
    
  );
}

export default App;
