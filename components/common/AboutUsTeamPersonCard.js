import React from "react";
import PropTypes from "prop-types";

const AboutUsTeamPersonCard = ({ img, name, position }) => (
  <div className="AboutUsTeamPersonCard">
    <img src={`/assets/images/about-us/${img}`} className="team-person__img" alt="" />
    <h4 className="team-person__name">{name}</h4>
    <p className="team-person__position">{position}</p>
    <style jsx>{`
      .AboutUsTeamPersonCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 103px;

        .team-person__img {
          margin-bottom: 49px;
        }
  
        .team-person__name {
          color: #001331;
          font-size: 21px;
          font-weight: bold;
          text-align: center;
        }
  
        .team-person__position {
          color: #000000;
          font-size: 21px;
          text-align: center;
        }
      }

      @media screen and (max-width: 1280px) {
        .AboutUsTeamPersonCard {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
  
          .team-person__img {
            width: 111px;
            height: auto;
            margin-bottom: 6px;
          }
    
          .team-person__name {
            font-size: 14px;
          }
    
          .team-person__position {
            font-size: 12px;
          }
        }
      }

    `}</style>
  </div>
);

AboutUsTeamPersonCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

AboutUsTeamPersonCard.defaultProps = {};

export default AboutUsTeamPersonCard;