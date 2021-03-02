import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import AgencySaySlider from "../../components/common/AgencySaySlider";

const HomeWhatClientSaySection = ({ t }) => {
  const comments = [
    {
      img: "/assets/images/services-mobile/tonyjaac.png",
      name: "Tony Andris",
      position: "CEO",
      project: "Jaac",
      comment:
        "The project was successful. Somnio Software tackled challenges head-on and created client-oriented solutions.",
    },
    {
      img: "/assets/images/common/hassan.jpg",
      name: "Hassan Lahlow",
      position: "Founder",
      project: "Cryptazar",
      comment:
        "I was surprised to see the level of achievement reached for such a heavy project. I selected Somnio because we knew that they are not just regular programmers but mostly engineers that can think through any challenge.",
    },
    {
      img: "/assets/images/common/nicolesanz.png",
      name: "Nicole Sanz",
      position: "Proyect Manager",
      project: "Fórmula",
      comment:
        "They succesfully help us to increase our monthly incomes. We are completely satisfied with their services and we’d like to continue working with them.",
    },
    {
      img: "/assets/images/common/tony.jpg",
      name: "Tony Loving",
      position: "Co-Founder",
      project: "Group Home Biz",
      comment:
        "Their breadth of knowledge and professionalism impressed us. There's nothing that i could think of for them to do better. They knew what they were doing and they did a good job on that. They were excellent.",
    },
    {
      img: "/assets/images/common/trac.png",
      name: "Trac Stephenson",
      position: "Founder",
      project: "Pro Wallet",
      comment:
        "Somnio is our technical team that guides us in all the steps of the process to build a mobile application, giving us a better understanding of what is the current state, helping us define what we need and suggesting next steps. They helped us to get to a high-quality app which allowed us to scale our idea and the service we intend to provide.",
    },
  ];

  return (
    <div className="HomeWhatClientSaySection">
      <div className="home-clientsay__content">
        <div className="section-header-light header-wrapper" data-aos="fade-in">
          <h2>{t("home.what_our_clients_say.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <AgencySaySlider comments={comments} />

        <h4 className="see-us-on">See us on</h4>

        <div className="home-clientsay__content-logos">
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="50"
            data-darkbg="1"
            data-clutchcompany-id="1252668"
          ></div>

          <a target="_blank" href="https://www.fiverr.com/mauriciopast?up_rollout=true">
            <img src="/assets/images/home/feverr_logo.png" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .HomeWhatClientSaySection {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-image: url(/assets/images/home/home-say-client-bg.svg);
          background-size: 200% auto;
          background-position: center;
          background-repeat: no-repeat;

          .header-wrapper {
            margin-top: 170px;
            margin-bottom: 27px !important;
          }

          .home-clientsay__content {
            z-index: 2;
            top: 0;
            width: 100%;
            color: white;

            .home-clientsay__content-logos {
              display: flex;
              justify-content: space-between;
              align-items: center;
              max-width: 470px;
              margin: 40px auto 200px auto;
            }
          }

          .see-us-on {
            text-align: center;
            font-size: 39px;
            font-weight: 700;
            margin-top: 110px;
          }
        }

        @media screen and (max-width: 1920px) {
          .HomeWhatClientSaySection {
            background-size: auto 100%;
          }
        }

        @media screen and (max-width: 1280px) {
          .HomeWhatClientSaySection {
            .header-wrapper {
              margin-top: 78px;
              margin-bottom: 10px !important;
            }

            .home-clientsay__content {
              .home-clientsay__content-logos {
                max-width: 330px;
                margin: 40px auto 70px auto;

                img {
                  max-width: 96px;
                  height: auto;
                }
              }
            }

            .see-us-on {
              font-size: 18px;
              line-height: 22px;
              margin-top: 40px;
            }
          }
        }

        @media screen and (max-width: 428px) {
          .HomeWhatClientSaySection {
            background-image: url(/assets/images/home/mobile/home-say-client-bg.svg);
            background-size: 200% 100%;
            background-position: center;
          }
        }
      `}</style>
    </div>
  );
};

HomeWhatClientSaySection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeWhatClientSaySection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeWhatClientSaySection);
