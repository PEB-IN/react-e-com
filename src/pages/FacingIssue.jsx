import React from "react";
import { Link } from "react-router-dom";

const FacingIssue = () => {
  //   $(".issue_radio").click(function () {
  //     $(".extra_ip").css("display", "none");
  //   });

  //   $(".other_radio").click(function () {
  //     $(".extra_ip").css("display", "block");
  //   });
  return (
    <section className="facing_issue_section position-relative">
      <div className="container-fluid">
        <div className="empty_50"></div>
        <div className="row">
          <div className="col-md-4  left_arrow_col justify-content-start">
            <Link
              to="/loginforms"
              className="leftarrow_icon text-white text-decoration-none"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="empty_100"></div>
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-4 col-md-6 text-left issue_column py-4 px-4 mx-sm-0 mx-3">
            <form>
              <h6>Facing an issue with:</h6>
              <input
                type="radio"
                id="login_error"
                name="faceform"
                value="LOGIN_ERROR"
                className="issue_radio"
              />
              <label htmlFor="login_error">Login Error</label>
              <br />
              <input
                type="radio"
                id="registeration_error"
                name="faceform"
                value="REGISTERATION_ERROR"
                className="issue_radio"
              />
              <label htmlFor="registeration_error">Registeration Error</label>
              <br />
              <input
                type="radio"
                id="otp_not_received"
                name="faceform"
                value="OTP_NOT_RECEIVED"
                className="issue_radio"
              />
              <label htmlFor="otp_not_received">OTP not Received</label>
              <br />
              <input
                type="radio"
                id="other_issue"
                name="faceform"
                value="OTHER_ISSUE"
                className="issue_radio other_radio"
              />
              <label htmlFor="other_issue">Any other Issue</label>

              <div>
                <input
                  type="text"
                  id="detail"
                  name=""
                  className="extra_ip"
                  placeholder="Explain in detail....."
                />
              </div>

              <div className="text-right">
                <input
                  type="submit"
                  name=""
                  className="issue_btn"
                  value="Raise the ticket"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacingIssue;
