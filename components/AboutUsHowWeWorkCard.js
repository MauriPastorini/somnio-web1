import React from "react";
import PropTypes from "prop-types";
import "./AboutUsHowWeWorkCard.scss";

const AboutUsHowWeWorkCard = ({ title, text, img }) => (
  <div className="AboutUsHowWeWorkCard">
    <img src="./assets/images/about-us/howwework-card-corn.svg" className="how-we-work-card-corn" alt="" />
    <img src={`./assets/images/about-us/${img}`} className="how-we-work-card-corn--img" alt="" />
    <h2>{title}</h2>
    <p>{text}</p>
    <style jsx>{`
      .AboutUsHowWeWorkCard {
        border-radius: 26px;
        background-color: #1e88e5;
        position: relative;
        overflow: hidden;
        padding: 70px 40px;
        margin-left: 20px;
        margin-right: 20px;
        width: 641px;

        h2 {
          color: #ffffff;
          font-size: 38px;
          font-weight: bold;
          margin-bottom: 40px;
          margin-left: 20px;
        }

        p {
          color: #ffffff;
          font-size: 20px;
          text-align: center;
        }

        .how-we-work-card-corn {
          position: absolute;
          top: -10px;
          right: -10px;
        }

        .how-we-work-card-corn--img {
          position: absolute;
          top: 15px;
          right: 10px;
          z-index: 1;
        }
      }
    `}</style>
  </div>
);

AboutUsHowWeWorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

AboutUsHowWeWorkCard.defaultProps = {};

export default AboutUsHowWeWorkCard;
