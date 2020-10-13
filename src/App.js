import React,{Fragment} from 'react';
import { Route } from "react-router-dom";

import Header from './layout/Header';


import FrontPage from './FrontPage';
import Home from './components/Home';
import Academics from './components/Academics';
import Blogs from './components/Blogs';
import Social from './components/Social';
import Shop from './components/Shop';



const App =() => {
  return (
    <Fragment>
    <Header />
    <Route exact path='/home' component={Home} />
    <div className="container">
    <Route exact path='/' component={FrontPage} />
    <Route exact path='/academics' component={Academics} />
    <Route exact path='/blogs' component={Blogs} />
    <Route exact path='/social' component={Social} />
    <Route exact path='/shop' component={Shop} />

    </div>
  
    </Fragment>
  );
}

export default App;
