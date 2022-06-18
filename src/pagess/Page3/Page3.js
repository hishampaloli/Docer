import React from "react";
import BreadBAr from "../../components/breadcrumberBar/BreadBAr";
import StarIcon from "@mui/icons-material/Star";
import docImg from "../Page2/Imagess/doctor-02.jpg";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Page3.css";
import Footer from "../../components/Footer/Footer";

function Page3() {
  return (
    <div>
      <BreadBAr type="Booking" />

      <div className="main-cont">
        <div class="card">
          <div class="card-body">
            <div class="doctor-widget">
              <div class="doc-info-left">
                <div class="doctor-img">
                  <img src={docImg} class="img-fluid" alt="User Image" />
                </div>
                <div class="doc-info-cont">
                  <h4 class="doc-name">Dr. Darren Elder</h4>
                  <p class="doc-p">BDS, MDS - Oral & Maxillofacial Surgery</p>

                  <div
                    class="rating"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i class="fas fa-star filled">
                      <StarIcon className="str" />
                    </i>
                    <i class="fas fa-star filled">
                      <StarIcon className="str" />
                    </i>
                    <i class="fas fa-star filled">
                      <StarIcon className="str" />
                    </i>
                    <i class="fas fa-star filled">
                      <StarIcon className="str" />
                    </i>
                    <i class="fas fa-star filled">
                      <StarIcon className="str" />
                    </i>
                    <span
                      class="d-inline-block average-rating"
                      style={{ marginLeft: "5px", color: "black" }}
                    >
                      35
                    </span>
                  </div>
                  <div className="location">
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <AddLocationIcon className="lct" /> Newyork, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardd booking-schedule schedule-widget">
          <div class="schedule-header">
            <div class="row">
              <div class="col-md-12">
                <div class="day-slot">
                  <ul>
                    <div class="arrow">
                      <a href="#">
                        <i class="fa fa-chevron-left ch-ic">
                          <ChevronLeftIcon />
                        </i>
                      </a>
                    </div>
                    <li>
                      <span>Mon</span>
                      <span class="slot-date">
                        11 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <li>
                      <span>Tue</span>
                      <span class="slot-date">
                        12 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <li>
                      <span>Wed</span>
                      <span class="slot-date">
                        13 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <li>
                      <span>Thu</span>
                      <span class="slot-date">
                        14 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <li>
                      <span>Fri</span>
                      <span class="slot-date">
                        15 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <li>
                      <span>Sat</span>
                      <span class="slot-date">
                        16 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <li>
                      <span>Sun</span>
                      <span class="slot-date">
                        17 Nov <small class="slot-year">2019</small>
                      </span>
                    </li>
                    <div class="arrow">
                      <a href="#">
                        <i class="fa fa-chevron-right ch-ic">
                          <ChevronRightIcon />
                        </i>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="schedule-cont">
            <div class="row">
              <div class="col-md-12">
                <div class="time-slot">
                  <ul class="clearfix">
                    <li>
                      <a class="timing" href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                    <li>
                      <a class="timing" href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                    <li>
                      <a class="timing" href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                    <li>
                      <a class="timing" href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing " href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                    <li>
                      <a class="timing " href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing selected" href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                    <li>
                      <a class="timing" href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                    <li>
                      <a class="timing" href="#">
                        <span>9:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>10:00</span> <span>AM</span>
                      </a>
                      <a class="timing" href="#">
                        <span>11:00</span> <span>AM</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-bt">
          <button className="bt">Proceed to Pay</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page3;
