import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Footer =() => {
  return (
    <Fragment>
    <Link to='/about'><p class="copyright-text">Developed By - Tej Pratap</p></Link>
    </Fragment>
  );
}

export default Footer;
