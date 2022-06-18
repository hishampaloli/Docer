import React, { useState } from "react";
import "./Page4.css";
import BreadBAr from "../../components/breadcrumberBar/BreadBAr";
import DoneIcon from "@mui/icons-material/Done";
import Docwid2 from "../../components/docWid2/Docwid2";
import Footer from "../../components/Footer/Footer";

function Page4() {
  const [date, setDate] = useState(false);
  const [icon, setIcon] = useState(false);

  return (
    <div>
      <BreadBAr type="search" />
      <div className="sr-cont">
        <div className="sr-left">
          <div class=" search-filter">
            <div class="card-heade">
              <h4 class="card-title mb-0">Search Filter</h4>
            </div>
            <div class="card-body">
              <div class="filter-widget">
                <div class="cal-icon">
                  <input
                    type={date ? "date" : "text"}
                    onClick={(e) => setDate(true)}
                    class="form-control datetimepicker"
                    placeholder="Select Date"
                  />
                </div>
              </div>
              <div class="filter-widget">
                <h4>Gender</h4>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" checked name="" id="" />
                    </span>{" "}
                    Male Doctor
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" name="" id="" />{" "}
                    </span>{" "}
                    Female Doctor
                  </label>
                </div>
              </div>
              <div class="filter-widget">
                <h4>Select Specialist</h4>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" name="" id="" />
                    </span>{" "}
                    Urology
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" name="" id="" />
                    </span>{" "}
                    Neurology
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" name="" id="" />
                    </span>{" "}
                    Dentist
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" checked name="" id="" />
                    </span>{" "}
                    Orthopedic
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" checked name="" id="" />
                    </span>{" "}
                    Cardiologist
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <span class="checkmark">
                      <input type="checkbox" name="" id="" />
                    </span>{" "}
                    Cardiologist
                  </label>
                </div>
              </div>
              <div class="btn-search">
                <button type="button" class="btn btn-block">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sr-right">
          <div className="card">
            <Docwid2 />
          </div>
          <div className="card">
            <Docwid2 />
          </div>{" "}
          <div className="card">
            <Docwid2 />
          </div>{" "}
          <div className="card">
            <Docwid2 />
          </div>{" "}
          <div className="card">
            <Docwid2 />
          </div>{" "}
          <div className="card">
            <Docwid2 />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page4;
