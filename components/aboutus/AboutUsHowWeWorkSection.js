// import Background from "./../../../../assets/img/about-us-how-we-work-bg.svg";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import AboutUsHowWeWorkCard from "../../components/common/AboutUsHowWeWorkCard";

const AboutUsHowWeWorkSection = ({ t }) => {
  const data = [
    {
      title: t("about_us.how_we_work.text_1"),
      text: t("about_us.how_we_work.text_2"),
      img: "howwework-card-agile.svg",
    },
    {
      title: t("about_us.how_we_work.text_3"),
      text: t("about_us.how_we_work.text_4"),
      img: "howwework-card-design.svg",
    },
  ];

  return (
    <div className="AboutUsHowWeWorkSection">
      <img className="bg" src="/assets/images/about-us/about-us-how-we-work-bg.svg" />
      <div className="how-we-work__content">
        <div className="section-header-light" data-aos="fade-in">
          <h2>{t("about_us.how_we_work.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="how-we-work__card-list custom-container mb-150" data-aos="fade-up">
          {data.map((d, i) => (
            <AboutUsHowWeWorkCard key={i} title={d.title} text={d.text} img={d.img} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .AboutUsHowWeWorkSection {
          position: relative;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          overflow: hidden;
          
          .bg{
            width: 100%;
            min-height: auto;
          }

          .how-we-work__content {
            position: absolute;
            top: 122px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            .how-we-work__card-list {
              display: flex;
              justify-content: space-between;
              max-width: 1430px !important;
            }
          }


          @media screen and (max-width: 1600px) {
            .bg{
              width: auto;
              min-height: 900px;
            }
          }
        }
      `}</style>
    </div>
  );
};

AboutUsHowWeWorkSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsHowWeWorkSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsHowWeWorkSection);
