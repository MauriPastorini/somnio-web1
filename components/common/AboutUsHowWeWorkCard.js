import React from "react";
import PropTypes from "prop-types";

const AboutUsHowWeWorkCard = ({ title, text, img }) => (
  <div className="AboutUsHowWeWorkCard">
    <img src="/assets/images/about-us/howwework-card-corn.svg" className="how-we-work-card-corn" alt="" />
    <img src={`/assets/images/about-us/${img}`} className="how-we-work-card-corn--img" alt="" />
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
        width: 100%;
        max-width: 641px;

        &:last-of-type {
          .how-we-work-card-corn--img {
            right: 19px !important;
          }
        }

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

      @media screen and (max-width: 1280px) {
        .AboutUsHowWeWorkCard {
          padding: 70px 36px 36px 36px;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 29px;

          &:last-of-type {
            .how-we-work-card-corn--img {
              right: 19px !important;
              width: 45px;
            }
          }

          h2 {
            font-size: 22px;
            margin-left: 0;
          }

          p {
            font-size: 14px;
          }

          .how-we-work-card-corn {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 102px;
          }

          .how-we-work-card-corn--img {
            position: absolute;
            top: 15px;
            right: 10px;
            z-index: 1;
            width: 55px;
          }
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