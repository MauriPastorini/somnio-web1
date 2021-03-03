import React from "react";

export const OurWorkCard = ({ data }) => {
  return (
    <figure className="OurWorkCard">
      <img className="bg" src={data.bg} />
      <figcaption>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <div className="download-button-group">
          <img src="/assets/images/our-work/button-app-store.png" />
          <img src="/assets/images/our-work/button-google-play.png" />
        </div>
        <div className="category-group">
          {data.categories.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
        <div className="tech-group">
          {data.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <button className="btn btn-custom-3">Learn more</button>
      </figcaption>
      <style jsx>{`
        .OurWorkCard {
          position: relative;
          -webkit-box-shadow: 0px 36px 66px -33px rgba(0,0,0,0.75);
          -moz-box-shadow: 0px 36px 66px -33px rgba(0,0,0,0.75);
          box-shadow: 0px 36px 66px -33px rgba(0,0,0,0.75);
          
          margin-bottom: 70px;
          .bg {
            width: 100%;
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
      `}</style>
    </figure>
  );
};
