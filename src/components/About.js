import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const About =() => {
  return (
    <Fragment>
    <div class="row">


    <div class="col-sm-6">
    <i class="fas fa-user-graduate fa-8x block-icon-academics"></i>
    </div>
    <div class="col-sm-6 block-about">
    <Link to='/academics'><h2>hosteZON<span>Academics</span></h2></Link>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec nulla magna, scelerisque quis dignissim at, malesuada in neque. Nunc id lorem quis risus placerat vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum odio justo, ac feugiat tortor tempus aliquet. Vestibulum vel nisi consectetur, condimentum arcu sit amet, fermentum quam. Integer ligula nunc, eleifend et tempus vel, tincidunt non eros. Curabitur ac vulputate sapien, ac luctus mi. Morbi id ligula maximus, posuere neque quis, egestas arcu. Sed luctus hendrerit turpis ut porttitor.
    </p>
    <hr></hr>
    </div>
  <hr />


   <div class="col-sm-6">
   <i class="fab fa-blogger fa-8x block-icon-blogs"></i>
   </div>
   <div class="col-sm-6 block-about">
   <Link to='/blogs'><h2>hosteZON<span>Blogs</span></h2></Link>
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec nulla magna, scelerisque quis dignissim at, malesuada in neque. Nunc id lorem quis risus placerat vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum odio justo, ac feugiat tortor tempus aliquet. Vestibulum vel nisi consectetur, condimentum arcu sit amet, fermentum quam. Integer ligula nunc, eleifend et tempus vel, tincidunt non eros. Curabitur ac vulputate sapien, ac luctus mi. Morbi id ligula maximus, posuere neque quis, egestas arcu. Sed luctus hendrerit turpis ut porttitor.
   </p>
   <hr></hr>
   </div>

   <div class="col-sm-6">
   <i class="far fa-handshake fa-8x block-icon-social"></i>
   </div>
  <div class="col-sm-6 block-about">
  <Link to='/social'><h2>hosteZON<span>Social</span></h2></Link>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Donec nulla magna, scelerisque quis dignissim at, malesuada in neque. Nunc id lorem quis risus placerat vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum odio justo, ac feugiat tortor tempus aliquet. Vestibulum vel nisi consectetur, condimentum arcu sit amet, fermentum quam. Integer ligula nunc, eleifend et tempus vel, tincidunt non eros. Curabitur ac vulputate sapien, ac luctus mi. Morbi id ligula maximus, posuere neque quis, egestas arcu. Sed luctus hendrerit turpis ut porttitor.
  </p>
  <hr></hr>
  </div>



 <div class="col-sm-6">
 <i class="fas fa-shopping-cart fa-8x block-icon-shop"></i>
 </div>
 <div class="col-sm-6 block-about">
 <Link to ='/shop'><h2>hosteZON<span>Shop</span></h2></Link>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec nulla magna, scelerisque quis dignissim at, malesuada in neque. Nunc id lorem quis risus placerat vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum odio justo, ac feugiat tortor tempus aliquet. Vestibulum vel nisi consectetur, condimentum arcu sit amet, fermentum quam. Integer ligula nunc, eleifend et tempus vel, tincidunt non eros. Curabitur ac vulputate sapien, ac luctus mi. Morbi id ligula maximus, posuere neque quis, egestas arcu. Sed luctus hendrerit turpis ut porttitor.
 </p>
 <hr></hr>
 </div>





   </div>
    </Fragment>
  );
}

export default About;
