import PropTypes from "prop-types";
import Link from "next/link";
import IconChevronRight from "./IconChevronRight";

const HomePorfolioSlide = ({ title, text, img }) => (
  <div className="HomePorfolioSlide" style={{ width: `100vw`}}>
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
    <img className="slide-img" src={img} alt=""></img>
    <style jsx>{`
      .HomePorfolioSlide {
        height: 874px;
        position: relative;
        display: flex;
        align-items: center;

        .slide-text-content {
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

        .slide-img {
          position: absolute;
          top: 0;
          right: 0;
        }
      }

      @media screen and (max-width: 1400px) {
        .slide-img {
          width: 850px;
        }
      }

      @media screen and (max-width: 1280px) {
        .slide-img {
          width: 600px;
        }
      }

      @media screen and (max-width: 991px) {
        .HomePorfolioSlide {
          max-height: unset;
          height: auto;
          flex-direction: column;

          .slide-text-content {
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
          
          .slide-img {
            position: relative;
            width: 100%;
            padding-left: 32px;
          }
        }
      }
    `}</style>
  </div>
);

export default HomePorfolioSlide;
