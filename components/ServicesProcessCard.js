import React from "react";
import "./ServicesProcessCard.scss";

const ServicesProcessCard = ({ data }) => (
  <div className="ServicesProcessCard">
    <img className="process-card-img" src={`./assets/images/services/${data.img}`} alt="" />
    <div className="process-card-text-wrapper">
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
    <style jsx>{`
      .ServicesProcessCard {
        display: flex;

        .process-card-img {
          max-width: 170px;
          margin-right: 90px;
        }
        .process-card-text-wrapper {
          max-width: 430px;

          h3 {
            font-size: 30px;
          }

          p {
            color: #707070;
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
    `}</style>
  </div>
);

export default ServicesProcessCard;
