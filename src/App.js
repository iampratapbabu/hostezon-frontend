import React,{Fragment} from 'react';
import { Route,Switch } from "react-router-dom";


//Context api files
//blogs context
import BlogsState from './context/blogs/BlogsState';





import Home from './components/Home';
import Academics from './components/academics/Main';
import Blogs from './components/blogs/Main';
import Social from './components/social/Main';
import Shop from './components/shop/Main';
import About from './components/about/Main';
import Signup from '../src/layout/Signup';
import Users from './components/user/Main';
import Test from '../src/layout/Test';
import Error from './layout/Error';
import BlogsContext from './context/blogs/BlogsContext';




const App =() => {
  return (
    <BlogsState>
    <Fragment>
    
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path = '/signup' component={Signup} />
    <Route exact path='/academics' component={Academics} />
    <Route exact path='/blogs' component={Blogs} />
    <Route exact path='/social' component={Social} />
    <Route exact path='/shop' component={Shop} />
    <Route exact path='/users' component={Users} />
    <Route exact path='/about' component={About} />
    <Route exact path='/test' component={Test} />
    <Route exact path='*' component={Error} />
    </Switch>
    
    
  
    </Fragment>
    </BlogsState>
  );
}

export default App;
