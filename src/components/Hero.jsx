import React from "react";
import "./Hero.css";
import hero from "../images/hero.png";
import { FaPlay } from "react-icons/fa";

const Hero = ({ mode   }) => {
  return (
    <div className={`hero-container ${mode }`}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-sm-12 col-lg-6 text-center">
            <img
              src={hero}
              className="d-block mx-auto img-fluid"
              alt="Bootstrap Themes"
              style={{ maxWidth: "90%", height: "auto" }} // Responsive image
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1
              className="hero-title"
              style={{
                color: mode === "light" ? "#000000" : "#ffffff",
                fontWeight: "800",
                fontSize: "clamp(32px, 5vw, 62px)", // Responsive font size
                fontFamily: "Inter, serif",
                lineHeight: "1.2",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              <span>Dive into Delights</span>
              <br />
              <span>
                Of Delectable <span style={{ color: "#39db4a" }}>Food</span>
              </span>
            </h1>

            <p
              className="hero-text"
              style={{
                color: mode === "light" ? "#4A4A4A" : "#ffffff",
                fontWeight: "500",
                fontSize: "clamp(18px, 2vw, 26px)", // Responsive font size
                fontFamily: "Inter, serif",
                lineHeight: "1.5",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-md-start">
              <button
                type="button"
                className="btn btn-lg px-4 me-md-2"
                style={{
                  boxShadow: "-2px 22px 38px 0px #8EFF9A80",
                  background: "#39DB4A",
                  borderRadius: "40px",
                  fontWeight: "600",
                  fontSize: "clamp(18px, 2vw, 26px)", // Responsive font size
                  color: "#FFFFFF",
                  fontFamily: "Inter, serif",
                  lineHeight: "1.2",
                }}
              >
                Order Now
              </button>
              <button
                type="button"
                className="btn btn-lg px-4"
                style={{
                  boxShadow: "6px 27px 34px 0px #0000001A",
                  borderRadius: "40px",
                  fontWeight: "600",
                  fontSize: "clamp(18px, 2vw, 26px)", // Responsive font size
                  color: "#4D4D4D",
                  fontFamily: "Inter, serif",
                  lineHeight: "1.2",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Watch Video <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
