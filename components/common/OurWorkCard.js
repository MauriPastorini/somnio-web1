import React from "react";

export const OurWorkCard = ({ data }) => {
  return (
    <figure className="OurWorkCard">
      <img className="bg" src={`/assets/images/our-work/${data.bg}`} />
      <img className="bg--mobile" src={`/assets/images/our-work/mobile/${data.bg}`} />

      <figcaption>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.tech.find((t) => t == "Web App") ? (
          ""
        ) : (
          <div className="download-button-group">
            <img src="/assets/images/our-work/button-app-store.png" />
            <img src="/assets/images/our-work/button-google-play.png" />
          </div>
        )}

        <div style={{color: `${data.fontColor}`}} className="category-group">
          {data.categories.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
        <div style={{color: `${data.fontColor}`}} className="tech-group">
          {data.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <button className="btn btn-custom-3">Learn more</button>
      </figcaption>
      <style jsx>{`
        .OurWorkCard {
          position: relative;
          -webkit-box-shadow: 0px 36px 66px -33px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 36px 66px -33px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 36px 66px -33px rgba(0, 0, 0, 0.75);

          margin-bottom: 70px;
          max-height: 427px;
          height: 100vh;
          width: 100%;
          max-width: 1252px;
          border-radius: 14px;

          .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 14px;
          }

          .bg--mobile {
            display: none;
          }

          figcaption {
            position: absolute;
            top: 0;
            left: 0;
            color: #ffffff;
            max-width: 352px;
            margin: 35px 71px;

            h1 {
              font-size: 50px;
              margin-bottom: 10px;
            }

            p {
              font-size: 16px;
              line-height: 22px;
            }

            .download-button-group {
              display: flex;
              img {
                width: 130px;
              }
            }

            .category-group {
              span {
                font-size: 15px;
                margin-right: 19px;
              }
            }

            .tech-group {
              margin-bottom: 37px;
              span {
                font-size: 15px;
                margin-right: 19px;
                font-weight: bold;
              }
            }

            .btn-custom-3 {
              border: 2px solid #ffffff;
              border-radius: 5px;
              min-width: 200px;
              font-size: 20px;
              color: #ffffff;
              padding: 5px 29px;
              font-weight: 500;
              font-size: 15px;
            }
          }
        }

        @media screen and (max-width: 428px) {
          .OurWorkCard {
            position: relative;
            max-height: 680px;
            border-radius: 30px;
            margin-bottom: 37px;
            
            .bg {
              display: none;
            }

            .bg--mobile {
              display: block;
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 30px;
            }

            figcaption {
              max-width: unset;
              margin: 28px 25px;

              h1 {
                font-size: 28px;
                margin-bottom: 10px;
              }

              p {
                font-size: 14px;
                line-height: 20px;
              }

              .download-button-group {
                display: flex;
                img {
                  width: 130px;
                }
              }

              .category-group {
                span {
                  font-size: 13px;
                  margin-right: 15px;
                }
              }

              .tech-group {
                margin-bottom: 37px;
                span {
                  font-size: 13px;
                  margin-right: 15px;
                }
              }

              .btn-custom-3 {
                display: none !important;
              }
            }
          }
        }
      `}</style>
    </figure>
  );
};
