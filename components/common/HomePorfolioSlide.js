import PropTypes from "prop-types";
import Link from "next/link";
import IconChevronRight from "./IconChevronRight";

const HomePorfolioSlide = ({ title, text, img }) => (
  <div className="HomePorfolioSlide" style={{ width: `100vw` }}>
    <div className="text-bg-wrapper">
      <div className="slide-text-content custom-container">
        <h2 className="slide-text-title">{title}</h2>
        <p className="slide-text-paragraph">{text}</p>
        <Link href="/">
          <a className="slide-text-link">
            <p>
              Read more
              <img src="/assets/images/common/arrow2.svg" alt="" />
            </p>
          </a>
        </Link>
      </div>
    </div>
    <div className="slide-img-wrapper">
      <img className="slide-img" src={img} alt=""></img>
    </div>
    <style jsx>{`
      .HomePorfolioSlide {
        position: relative;
        height: 874px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .text-bg-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #fff;

          .slide-text-content {
            width: 100%;
            margin-top: 220px;

            .slide-text-title {
              color: #001739;
              font-size: 55px;
              font-weight: bold;
              margin-bottom: 50px;
            }

            .slide-text-paragraph {
              color: #001739;
              font-size: 20px;
              max-width: 400px;
              margin-bottom: 130px;
              line-height: 25px;
            }

            .slide-text-link {
              color: #1681e3;
              text-decoration: none;
              font-size: 27px;
              font-weight: 700;

              p {
                display: flex;
                align-items: center;
              }

              img {
                width: 13px;
                height: 19px;
                margin-left: 16px;
              }
            }
          }
        }

        .slide-img-wrapper {
          position: relative;
          width: 972px;
          height: 872px;
        }

        .slide-img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      @media screen and (max-width: 1400px) {
        .slide-img-wrapper {
          position: relative;
          width: 850px;
          height: 767px;
        }
      }

      @media screen and (max-width: 1280px) {
        .HomePorfolioSlide {
          .text-bg-wrapper {
            .slide-text-content {
              .slide-text-title {
                font-size: 24px;
                font-weight: 700;
              }

              .slide-text-paragraph {
                font-size: 15px;
                line-height: 20px;
              }

              .slide-text-link {
                font-size: 16px;
              }
            }
          }
          .slide-img-wrapper {
            position: relative;
            width: 600px;
            height: 541px;
          }
        }
      }

      @media screen and (max-width: 991px) {
        .HomePorfolioSlide {
          max-height: unset;
          height: auto;
          flex-direction: column;

          .text-bg-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            background: #fff;

            .slide-text-content {
              margin-top: 0px;

              .slide-text-title {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 20px;
              }

              .slide-text-paragraph {
                color: #001739;
                font-size: 15px;
                max-width: unset;
                margin-bottom: 30px;
                line-height: 20px;
              }

              .slide-text-link {
                font-size: 16px;
              }
            }
          }

          .slide-img-wrapper {
            position: relative;
            width: 100%;
            height: auto;
            background: #fff;
          }

          .slide-img {
            position: relative;
            width: 100% !important;
            padding-left: 32px;
          }
        }
      }
    `}</style>
  </div>
);

export default HomePorfolioSlide;
