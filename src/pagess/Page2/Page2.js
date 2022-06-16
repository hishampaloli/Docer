import React from "react";
import "./Page2.css";
import StarIcon from "@mui/icons-material/Star";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import docImg from "./Imagess/doctor-02.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import VideocamIcon from "@mui/icons-material/Videocam";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import logo from "./Imagess/specialities-05.png";
import img1 from "./Imagess/img-01.jpg";
import img2 from "./Imagess/img-02.jpg";
import img3 from "./Imagess/img-03.jpg";
import img4 from "./Imagess/img-04.jpg";

function Page2() {
  return (
    <div className="doc-mainppp">
      <div class="breadcrumb-bar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-12 col-12">
              <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Doctor Profile
                  </li>
                </ol>
              </nav>
              <h2 class="breadcrumb-title">Doctor Profile</h2>
            </div>
          </div>
        </div>
      </div>

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
                  <p class="doc-department">
                    <img src={logo} class="img-fluid" alt="Speciality" />
                    Dentist
                  </p>
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
                      Newyork, USA -{" "}
                      <a href="javascript:void(0);">Get Directions</a>
                    </p>
                    <ul class="clinic-gallery">
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
              <div class="doc-info-right">
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
        </div>

        <Tabs className="tab">
          <TabList className="tab-row">
            <Tab className="tab-btn">
              <h5 className="tab-text">Overview</h5>
            </Tab>
            <Tab className="tab-btn">
              <h5 className="tab-text">Location</h5>
            </Tab>
            <Tab className="tab-btn">
              <h5 className="tab-text">Reviews</h5>
            </Tab>
            <Tab className="tab-btn">
              <h5 className="tab-text">Business</h5>
            </Tab>
          </TabList>

          <TabPanel className="tab-body">
            <div className="overview">
              <div className="overview-section">
                <p className="title-p">About Me</p>
                <p className="body-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div className="overview-section">
                <p className="title-p">Education</p>
                <div className="box-ed">
                  <p className="body-p-ed">
                    <p className="p-ed">American Dental Medical University</p>
                    <p className="sp-ed">BDS</p>
                    <p className="sp-ed">1998 - 2003</p>{" "}
                    <div className="circle"></div>{" "}
                  </p>
                  <p className="body-p-ed">
                    <p className="p-ed">American Dental Medical University</p>
                    <p className="sp-ed">MDS</p>
                    <p className="sp-ed">2003 - 2005</p>{" "}
                    <div className="circle"></div>
                  </p>
                </div>
              </div>

              <div className="overview-section">
                <p className="title-p">Work & Experience</p>
                <div className="box-ed">
                  <p className="body-p-ed">
                    <p className="p-ed">Glowing Smiles Family Dental Clinic</p>
                    <p className="sp-ed">2010 - Present (5 years)</p>
                    <br />
                    <div className="circle"></div>{" "}
                  </p>
                  <p className="body-p-ed">
                    <p className="p-ed">Comfort Care Dental Clinic</p>
                    <p className="sp-ed">2007 - 2010 (3 years)</p>
                    <br />
                    <div className="circle"></div>
                  </p>
                  <p className="body-p-ed">
                    <p className="p-ed">Dream Smile Dental Practice</p>
                    <p className="sp-ed">2005 - 2007 (2 years)</p>{" "}
                    <div className="circle"></div>
                  </p>
                </div>
              </div>
              <div className="overview-section">
                <p className="title-p">Awards</p>
                <div className="box-ed">
                  <p className="body-p-ed">
                    <p className="p-ed">Humanitarian Award</p>
                    <p className="sp-ed" style={{ maxWidth: "500px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                    <br />
                    <div className="circle"></div>{" "}
                  </p>
                  <p className="body-p-ed">
                    <p className="p-ed">
                      Certificate for International Volunteer Service
                    </p>
                    <p className="sp-ed" style={{ maxWidth: "500px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                    <br />
                    <div className="circle"></div>
                  </p>
                  <p className="body-p-ed">
                    <p className="p-ed">
                      Certificate for International Volunteer Service
                    </p>
                    <p className="sp-ed" style={{ maxWidth: "500px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>{" "}
                    <div className="circle"></div>
                  </p>
                </div>
              </div>

              <div className="overview-section">
                <p className="title-p">Services</p>
                <div className="row-1">
                  <button><ArrowRightAltIcon /> Tooth cleaning</button>
                  <button><ArrowRightAltIcon />Root canal</button>
                  <button> <ArrowRightAltIcon />Implats</button>
                </div>

                <div className="row-2">
                  <button> <ArrowRightAltIcon />Bonding</button>
                  <button> <ArrowRightAltIcon />Fissure sealants</button>
                  <button> <ArrowRightAltIcon />Surgical Extraction</button>
                </div>
              </div>

              <div className="overview-section">
                <p className="title-p">Specilization</p>
                <div className="row-1">
                  <button>  <ArrowRightAltIcon />Child Care</button>
                  <button>  <ArrowRightAltIcon />Dental Care</button>
                  <button>  <ArrowRightAltIcon />Oral Surgery</button>
                </div>

                <div className="row-2">
                  <button>  <ArrowRightAltIcon />Ortho</button>
                  <button>  <ArrowRightAltIcon />sealants</button>
                  <button>  <ArrowRightAltIcon />Extraction</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overview-l">
              <div className="loc-box">
                <div className="left">
                  <div className="tp">
                    <h1>Smile Cute Dentel Care</h1>
                    <p>MDS - Periodontology and Oral Implantology, BDS</p>
                  </div>

                  <div className="md">
                    <div className="st-ic">
                      <StarIcon className="str" />
                      <StarIcon className="str" />
                      <StarIcon className="str" />
                      <StarIcon className="str" />
                      <StarIcon  className="str"/>
                      (30)
                    </div>
                    <p>
                      <AddLocationIcon /> 2286 Sundown Lane, Austin, Texas
                      78749, USA
                    </p>
                    <span>Get Directions</span>
                  </div>

                  <div className="bt">
                  <ul class="clinic-gallery">
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
                </div>

                <div className="right">
                  <div className="r-left">
                  <div className="time">
                    <h4>Mon - Sat</h4>
                    <p>10:00 AM - 2:00 PM</p>
                    <p>4:00 PM - 9:00 PM</p>
                  </div>

                  <div className="time">
                    <h4>Wed - Sun</h4>
                    <p>10:00 AM - 2:00 PM</p>
                    <p>4:00 PM - 9:00 PM</p>
                  </div>
                  </div>
                  <div className="r-left">
                    <strong>$300</strong>
                  </div>
                </div>
              </div>

              <div className="loc-box">
                <div className="left">
                  <div className="tp">
                    <h1>Smile Cute Dentel Care</h1>
                    <p>MDS - Periodontology and Oral Implantology, BDS</p>
                  </div>

                  <div className="md">
                    <div className="st-ic">
                      <StarIcon className="str" />
                      <StarIcon className="str" />
                      <StarIcon className="str" />
                      <StarIcon className="str" />
                      <StarIcon  className="str"/>
                      (30)
                    </div>
                    <p>
                      <AddLocationIcon /> 2286 Sundown Lane, Austin, Texas
                      78749, USA
                    </p>
                    <span>Get Directions</span>
                  </div>

                  <div className="bt">
                  <ul class="clinic-gallery">
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
                </div>

                <div className="right">
                  <div className="r-left">
                  <div className="time">
                    <h4>Mon - Sat</h4>
                    <p>10:00 AM - 2:00 PM</p>
                    <p>4:00 PM - 9:00 PM</p>
                  </div>

                  <div className="time">
                    <h4>Wed - Sun</h4>
                    <p>10:00 AM - 2:00 PM</p>
                    <p>4:00 PM - 9:00 PM</p>
                  </div>
                  </div>
                  <div className="r-left">
                    <strong>$300</strong>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
           <div className="overview-l">
           <div class="widget review-listing">
										<ul class="comments-list">
										
											<li>
												<div class="comment">
												
													<div class="comment-body">
                          		<div class="meta-data">
                            <div className="r-text" style={{display:'flex', flexDirection: 'row'}}>
                            <img class="avatar avatar-sm rounded-circle" alt="User Image" src={img2} style={{height:'35px', width:'35px'}}/>
                            <div className="r-t" style={{display:'flex', flexDirection: 'column', marginLeft:'10px'}}>
                            <span class="comment-author">Richard Wilson</span>
															<span class="comment-date">Reviewed 2 Days ago</span>
                            </div>
                            
                            </div>
														
															<div class="review-count rating">
																<StarIcon className="str" />
																<StarIcon className="str" />
                                <StarIcon className="str" />
                                <StarIcon className="str" />
                                <StarIcon className="str" />
															</div>
														</div>
														<p class="recommended"><i class="far fa-thumbs-up"> <ThumbUpOffAltIcon /></i> I recommend the doctor</p>
														<p class="comment-content">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit,
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
															Ut enim ad minim veniam, quis nostrud exercitation.
															Curabitur non nulla sit amet nisl tempus
														</p>
														<div class="comment-reply">
															<a class="comment-btn" href="#">
																<i class="fas fa-reply"><ReplyIcon /></i> Reply
															</a>
														   <p class="recommend-btn">
															<span>Recommend?</span>
                              <div className="flx-btn">
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-up"><ThumbUpOffAltIcon/></i> Yes
															</a>
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-down"><ThumbDownOffAltIcon/></i> No
															</a>
                              </div>
														</p>
														</div>
													</div>
												</div>
												
												<ul class="comments-reply">
													<li>
														<div class="comment">
														
															<div class="comment-body">
																<div class="meta-data">
																<div className="r-text" style={{display:'flex', flexDirection: 'row'}}>
                            <img class="avatar avatar-sm rounded-circle" alt="User Image" src={img3} style={{height:'35px', width:'35px'}}/>
                            <div className="r-t" style={{display:'flex', flexDirection: 'column', marginLeft:'10px'}}>
                            <span class="comment-author">Richard Wilson</span>
															<span class="comment-date">Reviewed 2 Days ago</span>
                            </div>
                            
                            </div>
																	<div class="review-count rating">
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star filled"></i>
																		<i class="fas fa-star"></i>
																	</div>
																</div>
																<p class="comment-content">
																	Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																	Ut enim ad minim veniam.
																	Curabitur non nulla sit amet nisl tempus
																</p>
                                <div class="comment-reply">
                            <a class="comment-btn" href="#">
                              <i class="fas fa-reply"><ReplyIcon /></i> Reply
                            </a>
                             <p class="recommend-btn">
                            <span>Recommend?</span>
                            <div className="flx-btn">
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-up"><ThumbUpOffAltIcon/></i> Yes
															</a>
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-down"><ThumbDownOffAltIcon/></i> No
															</a>
                              </div>
                          </p>
                          </div>
															</div>
														</div>
													</li>
												</ul>
												
											</li>
											<li>
                      <div class="comment">
												
                        <div class="comment-body">
                            <div class="meta-data">
                          <div className="r-text" style={{display:'flex', flexDirection: 'row'}}>
                          <img class="avatar avatar-sm rounded-circle" alt="User Image" src={img1} style={{height:'35px', width:'35px'}}/>
                          <div className="r-t" style={{display:'flex', flexDirection: 'column', marginLeft:'10px'}}>
                          <span class="comment-author">Travis Tribmle</span>
                            <span class="comment-date">Reviewed 6 Days ago</span>
                          </div>
                          
                          </div>
                          
                            <div class="review-count rating">
                              <StarIcon className="str" />
                              <StarIcon className="str" />
                              <StarIcon className="str" />
                              <StarIcon className="str" />
                              <StarIcon className="str" />
                            </div>
                          </div>
                          <p class="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation.
                            Curabitur non nulla sit amet nisl tempus
                          </p>
                          <div class="comment-reply">
                            <a class="comment-btn" href="#">
                              <i class="fas fa-reply"><ReplyIcon /></i> Reply
                            </a>
                             <p class="recommend-btn">
                            <span>Recommend?</span>
                            <div className="flx-btn">
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-up"><ThumbUpOffAltIcon/></i> Yes
															</a>
															<a href="#" class="like-btn">
																<i class="far fa-thumbs-down"><ThumbDownOffAltIcon/></i> No
															</a>
                              </div>
                          </p>
                          </div>
                        </div>
                      </div>
											</li>
											
										</ul>
										
										<div class="all-feedback text-center" style={{marginBottom:'20px'}}>
											<a href="#" class="btn btn-primary btn-sm">
												Show all feedback <strong>(167)</strong>
											</a>
										</div>
										
									</div>

           </div>
          </TabPanel>
          <TabPanel>
          <div class="widget-content">
													<div class="listing-hours">
														<div class="listing-day current">
															<div class="day">Today <span>5 Nov 2019</span></div>
															<div class="time-items">
																<span class="open-status"><span class="badge bg-success-light">Open Now</span></span>
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Monday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Tuesday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Wednesday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Thursday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Friday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Saturday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day closed">
															<div class="day">Sunday</div>
															<div class="time-items">
																<span class="time closed-status"><span class="badge bg-danger-light">Closed</span></span>
															</div>
														</div>
													</div>
												</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Page2;
