import React from "react";

const ServicesWorkingToolsSlide = ({ slide }) => {
  return (
    <div className="ServicesWorkingToolsSlide custom-container">
      <div className="tool-slide-text__content">
        <h3 className="tool-slide-text__type">{slide.type}</h3>
        <p className="tool-slide-text__tool">{slide.tool}</p>
        <p className="tool-slide-text__text">{slide.text}</p>
      </div>

      <img src={`/assets/images/services/${slide.img}`} className="img-fluid" alt="" />

      <style jsx>{`
        .ServicesWorkingToolsSlide {
          align-items: center;
          display: flex;
          justify-content: space-between;
          height: 500px;
          max-height: 100vh;
          position: relative;
          width: 100%;

          .tool-slide-text__content {
            max-width: 600px;

            .tool-slide-text__type {
              font-size: 33px;
              font-weight: bold;
            }

            .tool-slide-text__tool {
              font-size: 33px;
            }

            .tool-slide-text__text {
              color: #707070;
              font-size: 23px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .ServicesWorkingToolsSlide {
            align-items: center;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: auto;
            max-height: 100vh;
            position: relative;
            width: 100%;

            .tool-slide-text__content {
              max-width: 600px;
              margin-bottom: 40px;
              
              .tool-slide-text__type {
                font-size: 22px;
                font-weight: bold;
                text-align: center;
              }

              .tool-slide-text__tool {
                font-size: 22px;
                text-align: center;
              }

              .tool-slide-text__text {
                color: #707070;
                font-size: 15px;
                text-align: center;
              }
            }
          }

          img {
            max-width: 245px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesWorkingToolsSlide;
