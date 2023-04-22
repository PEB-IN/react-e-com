import React from "react";
import { Link } from "react-router-dom";
import reg3 from "../assets/image/reg3.png";
import reg4 from "../assets/image/reg4.png";
import reg7 from "../assets/image/reg7.png";
import reg10 from "../assets/image/reg10.png";
import reg11 from "../assets/image/reg11.png";
import reg12 from "../assets/image/reg12.png";
import reg13 from "../assets/image/reg13.png";
import reg14 from "../assets/image/reg14.png";
import reg15 from "../assets/image/reg15.png";
import reg16 from "../assets/image/reg16.png";

const Registration = () => {
  return (
    <section className="container register_section">
      <div className="empty_50"></div>
      <Link
        to="/loginforms"
        className="leftarrow_icon text-white text-decoration-none"
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>
      <div className="empty_50"></div>
      <div className="container justify-content-start">
        <div className="empty_50"></div>
        <form className="registeration_form">
          <div className="big_row1  py-3 px-lg-5 px-3">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h6>
                  <span className="reg_icon complete_reg_icon"></span>
                  &emsp;Account Details
                </h6>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="icon_div position-relative">
                  <input
                    type="mail"
                    id="contact_mail"
                    name=""
                    placeholder="Contact Mail ID"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg11} className="img-fluid" alt="Mail Icon" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="con_num"
                    name=""
                    placeholder="Contact Number"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg12} className="img-fluid" alt="Phone Icon" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="icon_div position-relative">
                  <input
                    type="mail"
                    id="gst_num"
                    name=""
                    placeholder="GST Number"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg13} className="img-fluid" alt="GST Icon" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="con_person"
                    name=""
                    placeholder="Contact Person Name"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg14} className="img-fluid" alt="Contact Icon" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="company"
                    name=""
                    placeholder="Company Name"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg15} className="img-fluid" alt="Building Icon" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="designation"
                    name=""
                    placeholder="Designation"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img
                    src={reg16}
                    className="img-fluid"
                    alt="Designation Icon"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="position-relative">
                  <select name="" id="type" className="form-control">
                    <option value="slt">Select Business Type</option>
                    <option value="sp"> sole proprietorship</option>
                    <option value="ps"> partnership</option>
                    <option value="corp">corporation</option>
                  </select>
                  <i className="fa fa-caret-down select_icon"></i>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ borderBottom: "2px solid #EAF0F3" }} />

          <div className="big_row1 py-3 px-lg-5 px-3 mb-5">
            <div className="row">
              <div className="col-md-12 col-sm-12 contact_heading">
                <h6>
                  <span className="reg_icon"></span>&emsp;Contact Details
                </h6>
                <div className="position-relative">
                  <input
                    type="text"
                    id="address"
                    name=""
                    placeholder="Address"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    name=""
                    id="pin"
                    placeholder="Pincode"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg3} className="img-fluid" alt="Pincode Icon" />
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="city"
                    name=""
                    placeholder="City/District"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg4} className="img-fluid" alt="City Icon" />
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="state"
                    name=""
                    placeholder="State"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg7} className="img-fluid" alt="Location Icon" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon_div position-relative">
                  <input
                    type="text"
                    id="country"
                    name=""
                    placeholder="Country"
                    className="form-control"
                    required
                  />
                  <span className="requird_cls">*</span>
                  <img src={reg10} className="img-fluid" alt="Country Icon" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="position-relative">
                  <select name="" id="type" className="form-control" required>
                    <option value="slt">Select your referal name</option>
                    <option value="sp">option 1</option>
                    <option value="ps">option 2</option>
                    <option value="corp">option 3</option>
                  </select>
                  <span className="requird_cls">*</span>
                  <i className="fa fa-caret-down select_icon"></i>
                </div>
              </div>
            </div>
            <div className="row py-3 justify-content-end text-right">
              <div className="col-lg-3 col-md-4 text-left">
                <div className="robot">
                  <input id="checkbox" type="checkbox" className="mr-2" />
                  <label htmlFor="checkbox" className="font-weight-bold">
                    I'm Not a Robot
                  </label>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 px-4 mt-md-0 mt-3">
                <input
                  type="submit"
                  name=""
                  value="Register"
                  className="regbtn text-white "
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
