import Link from "next/link";
import PropTypes from "prop-types";

const HomeModalityCard = ({ headerImg, text, title, footerImg, link }) => (
  <div className="HomeModalityCard custom-container">
    <img
      className={`${
        title === "Full Product Development" ? "modality-card-header--violet" : "modality-card-header--lightblue"
      } modality-card-header`}
      src={headerImg}
      alt=""
    />
    <h3 className="modality-card-title">{title}</h3>
    <p className="modality-card-text">{text}</p>
    <Link href={link}>
      <a className="modality-card-link">
        <p>
          Read more
          <img src="/assets/images/common/arrow2.svg" alt="" />
        </p>
      </a>
    </Link>
    <style jsx>{`
      .HomeModalityCard {
        display: flex;
        flex-direction: column;
        align-items: center;

        .modality-card-title {
          color: #001739;
          text-align: center;
          font-size: 38px;
          font-weight: bold;
          margin-bottom: 30px;
          max-width: 317px;
        }

        .modality-card-text {
          color: #707070;
          font-size: 18px;
          margin-bottom: 20px;
          max-width: 487px;
          text-align: center;
        }

        .modality-card-header {
          margin-bottom: 69px;
          max-width: 165px;
          border-radius: 50%;
        }

        .modality-card-header--violet {
          -webkit-box-shadow: 29px 26px 70px -34px rgba(80, 46, 213, 1);
          -moz-box-shadow: 29px 26px 70px -34px rgba(80, 46, 213, 1);
          box-shadow: 29px 26px 70px -34px rgba(80, 46, 213, 1);
        }

        .modality-card-header--lightblue {
          -webkit-box-shadow: 29px 26px 70px -34px rgba(9, 167, 254, 1);
          -moz-box-shadow: 29px 26px 70px -34px rgba(9, 167, 254, 1);
          box-shadow: 29px 26px 70px -34px rgba(9, 167, 254, 1);
        }

        .modality-card-link {
          color: #1681e3;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 40px;
          text-decoration: none;

          img {
            width: 9px;
            height: 15px;
            margin-left: 16px;
          }
        }
      }

      @media screen and (max-width: 1280px) {
        .HomeModalityCard {
          .modality-card-title {
            font-size: 22px;
            margin-bottom: 36px;
            max-width: 170px;
          }

          .modality-card-text {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .modality-card-header {
            margin-bottom: 36px;
            max-width: 92px;
          }

          .modality-card-link {
            font-size: 16px;
            margin-bottom: 40px;

            img {
              width: 9px;
              height: 15px;
              margin-left: 16px;
            }
          }
        }
      }
    `}</style>
  </div>
);

HomeModalityCard.propTypes = {
  headerImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeModalityCard;
