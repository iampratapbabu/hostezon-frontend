import React,{Fragment} from 'react';
import {Link} from "react-router-dom"
import img1 from '../images/front.jpg';


const Carousel = () => {
  return (
    <Fragment>
    <div class = "carousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
    <Link to='/academics'>
      <img src={img1} class="d-block w-100" alt="First image"/>
      </Link>
    </div>
    <div class="carousel-item">
    <Link to='/blogs'>
      <img src={img1} class="d-block w-100" alt="Second image"/>
      </Link>
    </div>
    <div class="carousel-item">
    <Link to='/social'>
      <img src={img1} class="d-block w-100" alt="Third image"/>
      </Link>
    </div>
    <div class="carousel-item">
    <Link to='/shop'>
      <img src={img1} class="d-block w-100" alt="Fourth image"/>
      </Link>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
    </Fragment>
  );
}

export default Carousel;
