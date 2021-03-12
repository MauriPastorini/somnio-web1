import React from "react";
import PropTypes from "prop-types";

const AboutUsOurValueCard = ({ img, title, text, classImgName }) => (
  <div className="AboutUsOurValueCard">
    <img src={`/assets/images/about-us/${img}`} className={`our-value-card__img ${classImgName}`} alt="" />
    <h3 className="our-value-card__title">{title}</h3>
    <p className="our-value-card__text">{text}</p>
    <style jsx>{`
      .AboutUsOurValueCard {
        display: flex;
        flex-direction: column;
        align-items: center;

        .our-value-card__img {
          max-width: 132px;
          margin-bottom: 40px;
          border-radius: 50%;
        }
  
        .our-value-card__title {
          color: #001739;
          font-size: 33px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 30px;
        }
  
        .our-value-card__text {
          color: #707070;
          font-size: 18px;
          max-width: 294px;
          text-align: center;
        }
  
        .communication_shadow {
          -webkit-box-shadow: 24px 29px 69px -21px rgba(123, 111, 242, 1);
          -moz-box-shadow: 24px 29px 69px -21px rgba(123, 111, 242, 1);
          box-shadow: 24px 29px 69px -21px rgba(123, 111, 242, 1);
        }
  
        .quality_shadow {
          -webkit-box-shadow: 24px 29px 69px -21px rgba(0, 230, 202, 1);
          -moz-box-shadow: 24px 29px 69px -21px rgba(0, 230, 202, 1);
          box-shadow: 24px 29px 69px -21px rgba(0, 230, 202, 1);
        }
  
        .passion_shadow {
          -webkit-box-shadow: 24px 29px 69px -21px rgba(198, 115, 242, 1);
          -moz-box-shadow: 24px 29px 69px -21px rgba(198, 115, 242, 1);
          box-shadow: 24px 29px 69px -21px rgba(198, 115, 242, 1);
        }
  
        .empathy_shadow {
          -webkit-box-shadow: 24px 29px 69px -21px rgba(23, 131, 227, 1);
          -moz-box-shadow: 24px 29px 69px -21px rgba(23, 131, 227, 1);
          box-shadow: 24px 29px 69px -21px rgba(23, 131, 227, 1);
        }
  
        .team_shadow {
          -webkit-box-shadow: 24px 29px 69px -21px rgba(0, 59, 154, 1);
          -moz-box-shadow: 24px 29px 69px -21px rgba(0, 59, 154, 1);
          box-shadow: 24px 29px 69px -21px rgba(0, 59, 154, 1);
        }
        .trust_shadow {
          -webkit-box-shadow: 24px 29px 69px -21px rgba(16,148,240,1);
          -moz-box-shadow: 24px 29px 69px -21px rgba(16,148,240,1);
          box-shadow: 24px 29px 69px -21px rgba(16,148,240,1);
        }
      }


      @media screen and (max-width: 1280px) {
        .AboutUsOurValueCard {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 55px;

          .our-value-card__img {
            max-width: 90px;
            margin-bottom: 30px;
            border-radius: 50%;
          }
    
          .our-value-card__title {
            color: #001739;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 30px;
          }
    
          .our-value-card__text {
            color: #707070;
            font-size: 14px;
            max-width: 100%;
            text-align: center;
            margin-bottom: 0;
            max-width: 420px;
          }

        }
      }

    `}</style>
  </div>
);

AboutUsOurValueCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classImgName: PropTypes.string.isRequired,
};

export default AboutUsOurValueCard;
