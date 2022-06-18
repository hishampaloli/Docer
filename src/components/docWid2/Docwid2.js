import React from "react";

import StarIcon from "@mui/icons-material/Star";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import docImg from "../../pagess/Page2/Imagess/doctor-02.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import "react-tabs/style/react-tabs.css";

import logo from "../../pagess/Page2/Imagess/specialities-05.png";
import img1 from "../../pagess/Page2/Imagess/img-01.jpg";
import img2 from "../../pagess/Page2/Imagess/img-02.jpg";
import img3 from "../../pagess/Page2/Imagess/img-03.jpg";
import img4 from "../../pagess/Page2/Imagess/img-04.jpg";

function Docwid2() {
  return (
    <div>
      <div class="doctor-widge">
        <div class="doc-info-lef">
          <div class="doctor-img">
            <img src={docImg} class="img-fluid" alt="User Image" />
          </div>
          <div class="doc-info-contt">
            <h4 class="doc-name">Dr. Darren Elder</h4>
            <p class="doc-p">BDS, MDS - Oral & Maxillofacial Surgery</p>
            <p class="doc-department lefd">
              <img src={logo} class="img-fluid" alt="Speciality" />
              Dentist
            </p>
            <div
              class="rating lefr"
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
                style={{ marginLeft: "5px" }}
              >
                (35)
              </span>
            </div>
            <div class="clinic-details">
              <p class="doc-location">
                <i class="fas fa-map-marker-alt">
                  <AddLocationIcon className="lct" />
                </i>{" "}
                Newyork, USA - <a href="javascript:void(0);">Get Directions</a>
              </p>
              <ul class="clinic-gallery lefg">
                <li>
                  <a data-fancybox="gallery">
                    <img src={img1} alt="Feature" />
                  </a>
                </li>
                <li>
                  <a data-fancybox="gallery">
                    <img src={img2} alt="Feature" />
                  </a>
                </li>
                <li>
                  <a data-fancybox="gallery">
                    <img src={img3} alt="Feature" />
                  </a>
                </li>
                <li>
                  <a data-fancybox="gallery">
                    <img src={img4} alt="Feature" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="clinic-services">
              <span>Dental Fillings</span>
              <span>Teeth Whitneing</span>
            </div>
          </div>
        </div>
        <div class="doc-info-right righ">
          <div class="clini-infos">
            <ul>
              <li>
                <i class="far fa-thumbs-up">
                  <ThumbUpOffAltIcon />
                </i>{" "}
                99%
              </li>
              <li>
                <i class="far fa-comment">
                  <ChatBubbleOutlineIcon />
                </i>{" "}
                35 Feedback
              </li>
              <li>
                <i class="fas fa-map-marker-alt">
                  <AddLocationIcon />
                </i>{" "}
                Newyork, USA
              </li>
              <li>
                <i class="far fa-money-bill-alt">
                  <MonetizationOnIcon />
                </i>{" "}
                $100 per hour{" "}
              </li>
            </ul>
          </div>
          <div class="doctor-action">
            <a class="btn btn-white fav-btn">
              <i class="far fa-bookmark">
                <BookmarkBorderIcon />
              </i>
            </a>
            <a class="btn btn-white msg-btn">
              <i class="far fa-comment-alt">
                <ChatBubbleOutlineIcon />
              </i>
            </a>
            <a
              class="btn btn-white call-btn"
              data-toggle="modal"
              data-target="#voice_call"
            >
              <i class="fas fa-phone">
                <LocalPhoneIcon />
              </i>
            </a>
            <a
              class="btn btn-white call-btn"
              data-toggle="modal"
              data-target="#video_call"
            >
              <i class="fas fa-video">
                <VideocamIcon />
              </i>
            </a>
          </div>
          <div class="clinic-booking">
            <a class="apt-btn" href="booking.html">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docwid2;
