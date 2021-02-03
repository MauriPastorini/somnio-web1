import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import { useTranslation } from "react-i18next";
import AgencySaySlider from "../components/AgencySaySlider";
// import AgencySaySlider from "../../../../components/AgencySaySlider/AgencySaySlider";

const HomeWhatClientSaySection = ({ t }) => {
  const comments = [
    {
      img: "./assets/images/services-mobile/tonyjaac.png",
      name: "Tony Andris",
      position: "CEO",
      project: "Jaac",
      comment:
        "The project was successful. Somnio Software tackled challenges head-on and created client-oriented solutions.",
    },
    {
      img: "",
      name: "Hassan Lahlow",
      position: "Founder",
      project: "Cryptazar",
      comment:
        "I was surprised to see the level of achievement reached for such a heavy project. I selected Somnio because we knew that they are not just regular programmers but mostly engineers that can think through any challenge.",
    },
    {
      img: "",
      name: "Nicole Sanz",
      position: "Proyect Manager",
      project: "Fórmula",
      comment:
        "They succesfully help us to increase our monthly incomes. We are completely satisfied with their services and we’d like to continue working with them.",
    },
  ];
  return (
    <div className="HomeWhatClientSaySection">
      <img src="./assets/images/home/home-say-client-bg.svg" className="home-clientsay__bg" alt=""></img>
      <div className="home-clientsay__content">
        <div className="section-header-light mt-100 pt-100" data-aos="fade-in">
          <h2>{t("home.what_our_clients_say.title")}</h2>
          <img src={"./assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <AgencySaySlider comments={comments} />

        <h4 className="see-us-on">See us on</h4>

        <div className="home-clientsay__content-logos">
          <a target="_blank" href="https://clutch.co/profile/somnio-software">
            <img src="./assets/images/home/clutch_blanco.png" />
          </a>
          <a target="_blank" href="https://www.fiverr.com/mauriciopast?up_rollout=true">
            <img src="./assets/images/home/feverr_logo.png" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .HomeWhatClientSaySection {
          position: relative;
          width: 100vw;
          overflow: hidden;

          .home-clientsay__bg {
            width: auto;
            min-height: 1500px;
          }

          .home-clientsay__content {
            position: absolute;
            z-index: 2;
            top: 0;
            font-size: 25px;
            width: 100vw;
            color: white;

            .home-clientsay__content-logos {
              display: flex;
              justify-content: space-between;
              max-width: 470px;
              margin: 50px auto 0 auto;
            }
          }

          .see-us-on {
            text-align: center;
            font-size: 39px;
            font-weight: 700;
            margin-top: 146px;
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
