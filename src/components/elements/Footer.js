import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
export default function Footer() {
  return (
    <div id="footerLight">
    <MDBFooter
      bgColor="#421103"
      color="white"
      className="text-center text-lg-start text-muted"
    >
      <section className="footer-br">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>A1A Car Wash
              </h6>
              <p>
                Come experience the best car wash service Mexico can offer.
                Tried the rest , come try the best.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  onClick={() => {
                    document.getElementById("mainPage").scrollIntoView();
                  }}
                  className="text-reset"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  onClick={() => {
                    document.getElementById("aboutUs").scrollIntoView();
                  }}
                  className="text-reset"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  onClick={() => {
                    document.getElementById("form-div").scrollIntoView();
                  }}
                  className="text-reset"
                >
                  Registeration Form
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Albuquerque, New Mexico
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                breakingbad101@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center copyright p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        © 2022 Copyright: Aaryan Rastogi & Karishma Rajput
      </div>
    </MDBFooter>
    </div>
  );
}
