import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Footer =() => {
  return (
    <Fragment>
    <div class="footer">
    <Link to='/about'><p class = "footer-text">Developed By - Tej Pratap</p></Link>
    </div>
    </Fragment>
  );
}

export default Footer;
