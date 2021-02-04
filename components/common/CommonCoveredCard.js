import PropTypes from "prop-types";


const CommonCoveredCard = ({ title, description }) => (
  <div className="CommonCoveredCard">
    <h2>{title}</h2>
    <p>{description}</p>
    <style jsx>{`
      .CommonCoveredCard {
        background: #1e88e5;
        border-radius: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 45%;
        padding: 54px;

        -webkit-box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 50px -4px rgba(0, 0, 0, 0.75);

        h2 {
          color: #fff;
          font-size: 38px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 30px;
          max-width: 300px;
        }
        p {
          color: #fff;
          font-size: 23px;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

CommonCoveredCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CommonCoveredCard.defaultProps = {};

export default CommonCoveredCard;
