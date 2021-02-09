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
  ];
  return (
    <div className="HomeWhatClientSaySection">
      <img src="/assets/images/home/home-say-client-bg.svg" className="home-clientsay__bg" alt=""></img>
      <div className="home-clientsay__content">
        <div className="section-header-light header-wrapper" data-aos="fade-in">
          <h2>{t("home.what_our_clients_say.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <AgencySaySlider comments={comments} />

        <h4 className="see-us-on">See us on</h4>

        <div className="home-clientsay__content-logos">
          <a target="_blank" href="https://clutch.co/profile/somnio-software">
            <img src="/assets/images/home/clutch_blanco.png" />
          </a>
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

          .home-clientsay__bg {
            width: auto;
            min-height: 1350px;
          }

          .header-wrapper{
            margin-top: 170px;
            margin-bottom: 27px !important;
          }
          .home-clientsay__content {
            position: absolute;
            z-index: 2;
            top: 0;
            font-size: 25px;
            width: 100%;
            color: white;

            .home-clientsay__content-logos {
              display: flex;
              justify-content: space-between;
              max-width: 470px;
              margin: 40px auto 0 auto;
            }
          }

          .see-us-on {
            text-align: center;
            font-size: 39px;
            font-weight: 700;
            margin-top: 110px;
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
