import React from 'react';
import './Doctor.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import logo6 from '../../pagess/Page1/img/doctor-thumb-01.jpg'
import logo7 from '../../pagess/Page1/img/doctor-thumb-02.jpg'
import logo8 from '../../pagess/Page1/img/doctor-thumb-03.jpg'
import logo9 from '../../pagess/Page1/img/doctor-thumb-04.jpg'
import logo10 from '../../pagess/Page1/img/doctor-thumb-05.jpg'
import logo11 from '../../pagess/Page1/img/doctor-thumb-06.jpg'
import logo12 from '../../pagess/Page1/img/doctor-thumb-07.jpg'
import logo13 from '../../pagess/Page1/img/doctor-thumb-08.jpg'
import logo14 from '../../pagess/Page1/img/doctor-thumb-09.jpg'
import logo15 from '../../pagess/Page1/img/doctor-thumb-10.jpg'

function Doctor({image,name,type,rating,location,avalabe,rate}) {
  return (
    <div class="profile-widget">
    <div class="doc-img">
        <a >
            <img class="img-fluid doc-img" alt="User Image" src={image}/>
        </a>
        <a  class="fav-btn">
            <i class="far fa-bookmark"></i>
        </a>
    </div>
    <div class="pro-content">
        <h3 class="title">
            <a>{name}</a> 
        <CheckCircleIcon style={{color: 'green', marginLeft: '10px'}} />
        </h3>
        <p class="speciality">{type}</p>
        <div class="rating">
            <i class="fas fa-star filled">⭐</i>
            <i class="fas fa-star filled">⭐</i>
            <i class="fas fa-star filled">⭐</i>
            <i class="fas fa-star filled">⭐</i>
            <i class="fas fa-star filled">⭐</i>
            <span class="d-inline-block average-rating">({rating})</span>
        </div>
        <ul class="available-info">
            <li>
                <AddLocationIcon/> {location}
            </li>
            <li>
                <QueryBuilderIcon/> {avalabe}
            </li>
            <li>
                <LocalAtmIcon/> {rating}
                <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
            </li>
        </ul>
        <div class="row row-sm">
            <div class="col-6">
                <a  class="btn view-btn">View Profile</a>
            </div>
            <div class="col-6">
                <a class="btn book-btn">Book Now</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Doctor