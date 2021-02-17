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
      <div className="section-header-light header-wrapper" data-aos="fade-in">
        <h2>{t("about_us.how_we_work.title")}</h2>
        <img src={"/assets/images/home-services-line-light.svg"} alt="" />
      </div>

      <div className="card-list custom-container" data-aos="fade-up">
        {data.map((d, i) => (
          <AboutUsHowWeWorkCard key={i} title={d.title} text={d.text} img={d.img} />
        ))}
      </div>

      <style jsx>{`
        .AboutUsHowWeWorkSection {
          position: relative;
          background-image: url(/assets/images/about-us/how-we-work-bg.svg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          padding: 122px 0 200px 0;

          .card-list {
            display: flex;
            justify-content: space-between;
            max-width: 1430px !important;
          }
        }

        @media screen and (max-width: 1280px) {
          .AboutUsHowWeWorkSection {
            position: relative;
            background-image: url(/assets/images/about-us/mobile/how-we-work-bg.svg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            padding: 58px 0 66px 0;

            .header-wrapper{
              margin-bottom: 48px !important;
            }

            .card-list {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              max-width: unset;
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
