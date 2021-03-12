import Link from "next/link";
import PropTypes from "prop-types";

const HomeServiceCard = ({ headerImg, text, title, footerImg, link, footerImgWidth }) => (
  <div className="HomeServiceCard">
    <img className="service-card-header" src={headerImg} alt="" />
    <h2 className="service-card-title">{title}</h2>
    <p className="service-card-text">{text}</p>
    <Link href={link}>
      <a className="service-card-link">
        <p>
          Read more
          <img src="/assets/images/common/arrow2.svg" alt="" />
        </p>
      </a>
    </Link>
    <img style={{ width: footerImgWidth }} className="service-card-footer" src={footerImg} alt="" />

    <style jsx>
      {`
        .HomeServiceCard {
          display: flex;
          flex-direction: column;
          align-items: center;

          .service-card-title {
            color: #001739;
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            letter-spacing: 0.63px;
            margin-bottom: 41px;
            max-width: 200px;
            min-height: 60px;
          }

          .service-card-text {
            color: #707070;
            font-size: 18px;
            margin-bottom: 26px;
            max-width: 320px;
            text-align: center;
          }

          .service-card-header {
            margin-bottom: 41px;
            height: 130px;
          }

          .service-card-link {
            color: #1681e3;
            font-size: 20px;
            margin-bottom: 60px;
            text-decoration: none;
            font-weight: 700;

            p {
              display: flex;
              align-items: center;
            }

            img {
              width: 9px;
              height: 15px;
              margin-left: 16px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .HomeServiceCard {
            .service-card-title {
              font-size: 18px;
              letter-spacing: 0.45px;
              margin-bottom: 0;
            }

            .service-card-text {
              font-size: 14px;
              margin-bottom: 17px;
            }

            .service-card-link {
              font-size: 16px;
              margin-bottom: 38px;
            }
          }
        }
      `}
    </style>
  </div>
);

HomeServiceCard.propTypes = {
  headerImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  footerImg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeServiceCard;
