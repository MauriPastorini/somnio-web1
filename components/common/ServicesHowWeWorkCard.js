const ServicesHowWeWorkCard = ({ data }) => (
  <div className="ServicesHowWeWorkCard">
    <img src={`/assets/images/services/${data.img}`} className="how-we-work-card__img" alt="" />
    <h3 className="how-we-work-card__title">{data.title}</h3>
    <p className="how-we-work-card__text">{data.text1}</p>
    <p className="how-we-work-card__text">{data.text2}</p>
    <style jsx>{`
      .ServicesHowWeWorkCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 550px;

        .how-we-work-card__img {
          margin-bottom: 60px;
        }

        .how-we-work-card__title {
          font-size: 38px;
          font-weight: bold;
          color: #ffffff;
          text-align: center;
          margin-bottom: 40px;
        }
        .how-we-work-card__text {
          font-size: 20px;
          // text-align: center;
          color: #ffffff;
        }
      }

      @media screen and (max-width: 1600px) {
        .ServicesHowWeWorkCard {
          max-width: 600px;
        }
      }

      @media screen and (max-width: 1280px) {
        .ServicesHowWeWorkCard {
          margin-bottom: 46px;
  
          .how-we-work-card__img {
            margin-bottom: 33px;
            width: 51px;
            height: auto;
          }
  
          .how-we-work-card__title {
            font-size: 22px;
            margin-bottom: 30px;
          }
          .how-we-work-card__text {
            font-size: 14px;
          }
        }
      }
    `}</style>
  </div>
);

export default ServicesHowWeWorkCard;
