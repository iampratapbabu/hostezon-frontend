import React,{Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Test from './components/Test';

const App =() => {
  return (
    <Fragment>
    <div className="container">
    <Header />
    <Body />
    <Test />
    <Footer />

    </div>
    </Fragment>
  );
}

export default App;
