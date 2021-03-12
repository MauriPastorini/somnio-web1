import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const WhyFlutterWhatIsFlutterSection = ({ t }) => {
  const characteristic_data = [
    {
      img: "/assets/images/why-flutter/characteristic_1.svg",
      title: t("why_flutter.what_is_flutter.characteristics.characteristic_1.title"),
      text: t("why_flutter.what_is_flutter.characteristics.characteristic_1.text"),
    },
    {
      img: "/assets/images/why-flutter/characteristic_2.svg",
      title: t("why_flutter.what_is_flutter.characteristics.characteristic_2.title"),
      text: t("why_flutter.what_is_flutter.characteristics.characteristic_2.text"),
    },
    {
      img: "/assets/images/why-flutter/characteristic_3.svg",
      title: t("why_flutter.what_is_flutter.characteristics.characteristic_3.title"),
      text: t("why_flutter.what_is_flutter.characteristics.characteristic_3.text"),
    },
    {
      img: "/assets/images/why-flutter/characteristic_4.svg",
      title: t("why_flutter.what_is_flutter.characteristics.characteristic_4.title"),
      text: t("why_flutter.what_is_flutter.characteristics.characteristic_4.text"),
    },
    {
      img: "/assets/images/why-flutter/characteristic_5.svg",
      title: t("why_flutter.what_is_flutter.characteristics.characteristic_5.title"),
      text: t("why_flutter.what_is_flutter.characteristics.characteristic_5.text"),
    },
    {
      img: "/assets/images/why-flutter/characteristic_6.svg",
      title: t("why_flutter.what_is_flutter.characteristics.characteristic_6.title"),
      text: t("why_flutter.what_is_flutter.characteristics.characteristic_6.text"),
    },
  ];

  return (
    <section className="WhyFlutterWhatIsFlutterSection custom-container">
      <div className="text-and-images">
        <div className="text-content">
          <h3>{t("why_flutter.what_is_flutter.title")}</h3>
          <p>{t("why_flutter.what_is_flutter.text_1")}</p>
        </div>
        <img src="/assets/images/why-flutter/flutter-logo.svg" alt="" />
      </div>

      <div className="row charasteristic">
        <div className="charasteristic__item col-lg-8">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_1.title")}</h4>
        </div>
        <div className="charasteristic__item col-lg-4">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_4.title")}</h4>
        </div>
      </div>

      <div className="row charasteristic">
        <div className="charasteristic__item col-lg-8">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_2.title")}</h4>
        </div>
        <div className="charasteristic__item col-lg-4">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_5.title")}</h4>
        </div>
      </div>

      <div className="row charasteristic">
        <div className="charasteristic__item col-lg-8">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_3.title")}</h4>
        </div>
        <div className="charasteristic__item col-lg-4">
          <img src="/assets/images/why-flutter/check.svg" alt="" />
          <h4>{t("why_flutter.what_is_flutter.characteristics.characteristic_6.title")}</h4>
        </div>
      </div>

      <div className="charasteristic-detail-list">
        {characteristic_data.map((item, i) => (
          <div key={i} className="charasteristic-detail__item">
            <div className="img-content">
              <img src={item.img} alt="" />
            </div>
            <div className="text-content">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .WhyFlutterWhatIsFlutterSection {
          max-width: 1220px;
          margin: 200px auto 0 auto;

          .text-and-images {
            display: flex;
            justify-content: space-between;
            margin-bottom: 77px;

            .text-content {
              max-width: 570px;

              h3 {
                color: #001331;
                font-size: 40px;
                font-weight: bold;
              }
              p {
                font-size: 20px;
              }
            }
          }

          .charasteristic {
            margin-bottom: 40px;
            .charasteristic__item {
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                margin-right: 42px;
              }

              h4 {
                color: #001331;
                font-size: 24px;
                font-weight: 700;
              }
            }
          }

          .charasteristic-detail-list {
            margin-top: 235px;

            .charasteristic-detail__item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 100px;

              .text-content {
                
                width: 50%;
                h4 {
                  color: #001331;
                  font-size: 36px;
                  font-weight: bold;
                  max-width: 422px;
                  margin-bottom: 25px;
                }
                p {
                  color: #707070;
                  font-size: 18px;
                  max-width: 620px;
                }
              }

              .img-content {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              &:last-of-type {
                margin-bottom: 180px;
              }

              &:nth-child(even){
                .img-content {
                  order:1;
                }
              }
            }
          }
        }

        @media screen and (max-width: 991px) {
          .WhyFlutterWhatIsFlutterSection {
            margin: 67px auto;

            .text-and-images {
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 50px;

              .text-content {
                max-width: 570px;
                order: 1;

                h3 {
                  font-size: 24px;
                  text-align: center;
                  margin-bottom: 20px;
                }
                p {
                  font-size: 15px;
                  // text-align: center;
                }
              }

              img {
                width: 104px;
                margin-bottom: 41px;
              }
            }

            .charasteristic {
              margin-bottom: 0;
              .charasteristic__item {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 20px;

                img {
                  margin-right: 42px;
                  width: 35px;
                }

                h4 {
                  font-size: 16px;
                  margin-bottom: 0;
                }
              }
            }

            .charasteristic-detail-list {
              margin-top: 70px;
              
              .charasteristic-detail__item {
                flex-direction: column;
                margin-bottom: 61px;

                .text-content {
                  width: unset;
                  
                  h4 {
                    font-size: 24px;
                    max-width: 422px;
                    margin-bottom: 25px;
                    text-align: center;
                    line-heigth: 28px;
                    margin-left: auto;
                    margin-right: auto;
                  }

                  p {
                    font-size: 14px;
                    line-heigth: 20px;
                  }
                }
  
                .img-content {
                  width: unset;

                  img{
                    max-width: 114px;
                    margin-bottom: 17px;
                  }
                }
  
                &:last-of-type {
                  margin-bottom: 0;
                }
  
                &:nth-child(even){
                  .img-content {
                    order: unset;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

WhyFlutterWhatIsFlutterSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(WhyFlutterWhatIsFlutterSection);
