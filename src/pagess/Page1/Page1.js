import React, { useRef, useState, Component } from "react";
import "./Page1.css";
import SearchIcon from "@mui/icons-material/Search";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Pagination, Navigation } from "swiper";
import Specality from "../../components/Specality/Specality";
import Fade from "react-reveal/Fade";
import StarIcon from '@mui/icons-material/Star';
import Doctor from "../../components/doctor/Doctor";
import logo1 from "./img/specialities-01.png";
import logo2 from "./img/specialities-02.png";
import logo3 from "./img/specialities-03.png";
import logo4 from "./img/specialities-04.png";
import logo5 from "./img/specialities-05.png";
import logo6 from "./img/doctor-thumb-01.jpg";
import logo7 from "./img/doctor-thumb-02.jpg";
import logo8 from "./img/doctor-thumb-03.jpg";
import logo9 from "./img/doctor-thumb-04.jpg";
import logo10 from "./img/doctor-thumb-05.jpg";
import logo11 from "./img/doctor-thumb-06.jpg";
import logo12 from "./img/doctor-thumb-07.jpg";
import logo13 from "./img/doctor-thumb-08.jpg";
import logo14 from "./img/doctor-thumb-09.jpg";
import logo15 from "./img/doctor-thumb-10.jpg";

import logo16 from "./img/feature-01.jpg";
import logo17 from "./img/feature-02.jpg";
import logo18 from "./img/feature-03.jpg";
import logo19 from "./img/feature-04.jpg";
import logo20 from "./img/feature-06.jpg";

import image1 from "./img/feature.png";
import Features from "../../components/features/Features";

function Page1() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div className="aling-items-justify main">
      <div class="section-1 container-fluid">
        <div class="banner-wrapper">
          <div class="banner-header text-center">
            <Fade bottom>
              <h1 className="heading-text">
                Search Beauty Experts, Make an Appointment
              </h1>
              <p className="heading-p">
                Discover the beauty experts, hair dressers & massage therapist nearest to
                you.
              </p>
            </Fade>
          </div>

          <div class="search-box aling-items-justify">
            <Fade bottom>
              <form>
                <div class="form-group search-location">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="📍Search Location"
                  />
                  <span class="form-text">Based on your Location</span>
                </div>
                <div class="form-group search-info">
                  <input
                    type="text"
                    class="form-control form-control-2"
                    placeholder="🔍 Search Doctors, Clinics, Hospitals, Diseases Etc"
                  />
                  <span class="form-text">
                    Ex : Facial, Waxing, Manicure, Pedicure etc...
                  </span>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary search-btn aling-items"
                >
                  <SearchIcon />
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>

      <div className='section-what'>
          <div className="what-text">
          <Fade bottom>
            <h1 className='cl-head '>Book Services for ?</h1>
            </Fade>
          </div>
          <div className="what-img-cont">
          <Fade bottom >
          <div className="box-m">
          <div className="box box-1">
             
            </div>
            <h2 className='box-h2'>Female Beauty Services</h2>
            <button>Book Now</button>
          </div>
           
            </Fade>
            <Fade bottom >
            <div className="box-m">
            <div className="box box-2">
            </div>
            <h2 className='box-h2'>Female Massage Services</h2>
            <button>Book Now</button>
            </div>
            </Fade>
            <Fade bottom >
            <div className="box-m">
            <div className="box box-3">
            </div>

            <h2 className='box-h2'>Female Hair Services</h2>
              <button>Book Now</button>
            </div>
            </Fade>
          </div>
      </div>

      {/* section-2 */}

      <div class="container-fluid section-specialities ">
        <div class="section-header text-center aling-items-justify specialities-text">
          <Fade bottom>
            <h2 className="cl-head">Pick Your Favorite Salon Services at Home Service</h2>
            </Fade>
            <Fade bottom>
            <p class="sub-title">
              Best Quality Products | Certified Beauticians | Pocket-Freindly Offers | Delhi NCR, Noida,Faridabad, Greater Noida 
            </p>
          </Fade>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-9">
            <Fade bottom>
              <div class="specialities-slider slider aling-items-justify-space-btw">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    340: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    540: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  style={{ padding: "40px 0px" }}
                >
                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo1} text="Facial" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo2} text="Waxing" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo3} text="Threading" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo4} text="Manicure" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo5} text="Pedicure" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo1} text="Facial" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo2} text="Waxing" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo3} text="Threading" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo4} text="Manicure" />
                  </SwiperSlide>

                  <SwiperSlide className="cc">
                    {" "}
                    <Specality image={logo5} text="Pedicure" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <section class="section section-doctor">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <div class="section-header-doct ">
                <Fade bottom>
                  <h2>Certified Beauty Experts</h2>
                  <p>Discover the best beauty experts nearest to you. </p>
                </Fade>
              </div>
              <div class="about-content">
              <Fade bottom>
                <p>
                Ab Aap apni Beauty Services ke liye bahut aasani se Reviews or Experience dekh kar Apne Najdeeki Certified Beauty Experts ke saath Salon at Home ka Appointment Book kar sakte hai. Beauty Players aapko 50+ categories ke saath Home Salon Service ko provide karne wale Certified Beauty Experts ke saath jodata hai.


                </p>
               
                </Fade>
                <Fade bottom>
                <a>Read More..</a>
                </Fade>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="doctor-slider slider">
              <Fade bottom>
                <Swiper
                  slidesPerView={4}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    340: {
                      slidesPerView: 2,
                      spaceBetween: 230,
                    },
                    540: {
                      slidesPerView: 3,
                      spaceBetween: 200,
                    },
                    760: {
                      slidesPerView: 3,
                      spaceBetween: 200,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {" "}
                    <Doctor
                      image={logo6}
                      name="Ruby Perrin"
                      type="MDS - Periodontology and Oral Implantology, BDS"
                      rating="17"
                      location="Florida, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$300 - $1000"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Doctor
                      image={logo7}
                      name="Darren Elder"
                      type=" BDS, MDS - Oral & Maxillofacial Surgery"
                      rating="35"
                      location=" Newyork, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$50 - $300"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Doctor
                      image={logo8}
                      name="Deborah Angel"
                      type=" MBBS, MD - General Medicine, DNB - Cardiology"
                      rating="27"
                      location="Georgia, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$100 - $300"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Doctor
                      image={logo9}
                      name="Sofia Brient"
                      type=" MBBS, MS - General Surgery, MCh - Urology"
                      rating="4"
                      location="Louisiana, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$300 - $500"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Doctor
                      image={logo10}
                      name="SMarvin Campbell"
                      type=" MBBS, MS - General Surgery, MCh - Urology"
                      rating="4"
                      location="Louisiana, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$300 - $500"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Doctor
                      image={logo11}
                      name="Ruby Perrin"
                      type="MDS - Periodontology and Oral Implantology, BDS"
                      rating="17"
                      location="Florida, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$300 - $1000"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Doctor
                      image={logo12}
                      name="Darren Elder"
                      type=" BDS, MDS - Oral & Maxillofacial Surgery"
                      rating="35"
                      location=" Newyork, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$50 - $300"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Doctor
                      image={logo13}
                      name="Deborah Angel"
                      type=" MBBS, MD - General Medicine, DNB - Cardiology"
                      rating="27"
                      location="Georgia, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$100 - $300"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Doctor
                      image={logo14}
                      name="Sofia Brient"
                      type=" MBBS, MS - General Surgery, MCh - Urology"
                      rating="4"
                      location="Louisiana, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$300 - $500"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Doctor
                      image={logo15}
                      name="SMarvin Campbell"
                      type=" MBBS, MS - General Surgery, MCh - Urology"
                      rating="4"
                      location="Louisiana, USA"
                      avalabe="Available on Fri, 22 Mar"
                      rate="$300 - $500"
                    />
                  </SwiperSlide>
                </Swiper>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-features">
        <div class="container-fluid-f">
          <div class="row">
            <div class="col-md-5 features-img">
            <Fade bottom>x
              <img src={image1} class="img-fluid-f" alt="Feature" />
              </Fade>
            </div>
            <div class="col-md-7">
              <div class="section-header-feature">
              <Fade bottom>
                <h2 class="mt-2">Availabe Features in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
                </Fade>
              </div>
              <div class="features-slider slider">
              <Fade bottom>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={60}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    340: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    540: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 25,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  style={{ padding: "50px 0px" }}
                >
                  <SwiperSlide>
                    {" "}
                    <Features image={logo16} text="ICU" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Features image={logo17} text="Laboratory" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Features image={logo18} text="Operation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Features image={logo19} text="Medical" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Features image={logo20} text="Patient Ward" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Features image={logo16} text="Test Room" />
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <Features image={logo16} text="ICU" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Features image={logo17} text="Laboratory" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Features image={logo18} text="Operation" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Features image={logo19} text="Medical" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Features image={logo20} text="Patient Ward" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Features image={logo18} text="Test Room" />
                  </SwiperSlide>
                </Swiper>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="news">
        <div className="news-text">
        <Fade bottom >
          <h1 className='cl-head'>Blogs and News</h1>
          <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Fade>
        </div>
      </div>

      <div className="news-cont">
      <Fade bottom>
        <div className="news-box">
          <div className="img-box">
            <img src={logo11} alt="" />
          </div>
          <div className="info">
            <div className="name">
              <img src={logo1} alt="" />
              <p>Dr. Ruby Perrin</p>
            </div>
            <p className='p'><AccessTimeIcon /> 3 Dec 2022</p>
            <div className="heading">
              <h2>Doccure - Making your Clinic painless visit ?</h2>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, commodi veritatis nihil facere illo?</p>
            </div>
          </div>
        </div>
        </Fade>

        <Fade bottom>
        <div className="news-box">
          <div className="img-box">
            <img src={logo11} alt="" />
          </div>
          <div className="info">
            <div className="name">
              <img src={logo1} alt="" />
              <p>Dr. Ruby Perrin</p>
            </div>
            <p className='p'><AccessTimeIcon /> 3 Dec 2022</p>
            <div className="heading">
              <h2>Doccure - Making your Clinic painless visit ?</h2>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, commodi veritatis nihil facere illo?</p>
            </div>
          </div>
        </div>
        </Fade>

        <Fade bottom>
        <div className="news-box">
          <div className="img-box">
            <img src={logo11} alt="" />
          </div>
          <div className="info">
            <div className="name">
              <img src={logo1} alt="" />
              <p>Dr. Ruby Perrin</p>
            </div>
            <p className='p'><AccessTimeIcon /> 3 Dec 2022</p>
            <div className="heading">
              <h2>Doccure - Making your Clinic painless visit ?</h2>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, commodi veritatis nihil facere illo?</p>
            </div>
          </div>
        </div>
        </Fade>

        <Fade bottom >
        <div className="news-box">
          <div className="img-box">
            <img src={logo11} alt="" />
          </div>
          <div className="info">
            <div className="name">
              <img src={logo1} alt="" />
              <p>Dr. Ruby Perrin</p>
            </div>
            <p className='p'><AccessTimeIcon /> 3 Dec 2022</p>
            <div className="heading">
              <h2>Doccure - Making your Clinic painless visit ?</h2>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, commodi veritatis nihil facere illo?</p>
            </div>
          </div>
        </div>
        </Fade>
      </div>

      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default Page1;
