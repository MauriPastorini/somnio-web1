import PropTypes from "prop-types";
import Link from "next/link";
import IconChevronRight from "./IconChevronRight";

const HomePorfolioSlide = ({ title, text, img }) => (
  <div className="HomePorfolioSlide" style={{ width: `100%` }}>
    <div className="slide-text-content custom-container">
      <h2 className="slide-text-title">{title}</h2>
      <p className="slide-text-paragraph">{text}</p>
      <Link href="/">
        <a className="slide-text-link">
          Read more
          <IconChevronRight />
        </a>
      </Link>
    </div>
    <img className="slide-img" src={img} alt=""></img>
    <style jsx>{`
      .HomePorfolioSlide {
        max-height: 100vh;
        height: 990px;
        position: relative;
        display: flex;
        align-items: center;
      }

      .slide-text-content {
        .slide-text-title {
          color: #001739;
          font-size: 55px;
          margin-bottom: 60px;
        }

        .slide-text-paragraph {
          color: #001739;
          font-size: 24px;
          max-width: 450px;
          margin-bottom: 100px;
        }

        .slide-text-link {
          color: #1681e3;
          text-decoration: none;
          font-size: 27px;
        }
      }

      .slide-img {
        position: absolute;
        top: 0;
        right: 0;
      }

      @media screen and (max-width: 1600px) {
        .slide-text-content {
          .slide-text-paragraph {
            color: #001739;
            font-size: 24px;
            max-width: 400px;
          }
        }
      }

      @media screen and (max-width: 1500px) {
        .slide-text-content {
          .slide-text-paragraph {
            color: #001739;
            font-size: 24px;
            max-width: 350px;
          }
        }
      }

      @media screen and (max-width: 1400px) {
        .slide-img {
          position: absolute;
          top: 50px;
          right: 0;
          max-width: 60%;
        }
      }
    `}</style>
  </div>
);

export default HomePorfolioSlide;
