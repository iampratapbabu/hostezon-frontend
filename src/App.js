import React,{Fragment} from 'react';
import { Route } from "react-router-dom";




import Home from './components/Home';
import Academics from './components/academics/Main';
import Blogs from './components/blogs/Main';
import Social from './components/social/Main';
import Shop from './components/shop/Main';
import About from './components/about/Main';



const App =() => {
  return (
    <Fragment>
    
    
    <Route exact path='/' component={Home} />
    
    
    <Route exact path='/academics' component={Academics} />
    <Route exact path='/blogs' component={Blogs} />
    <Route exact path='/social' component={Social} />
    <Route exact path='/shop' component={Shop} />
    <Route exact path='/about' component={About} />

    
  
    </Fragment>
  );
}

export default App;
