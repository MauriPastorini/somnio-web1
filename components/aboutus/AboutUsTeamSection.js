import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import AboutUsTeamPersonCard from "../../components/common/AboutUsTeamPersonCard";

const data = [
  {
    img: "mauri.png",
    name: "Mauricio Pastorini",
    position: "CEO & Co-Founder",
  },
  {
    img: "miche.png",
    name: "Martín Michelini",
    position: "COO & Co-Founder",
  },
  {
    img: "gian.png",
    name: "Gianfranco Papa",
    position: "CTO & Co-Founder",
  },
  {
    img: "napo.png",
    name: "Napoleon San Martin",
    position: "Software Developer",
  },
  {
    img: "gonza.png",
    name: "Gonzalo Sosa",
    position: "Mobile Software Developer",
  },
  {
    img: "fabian.png",
    name: "Fabián Bardecio",
    position: "Mobile Software Developer",
  },
  {
    img: "fede.png",
    name: "Federico Mehues",
    position: "Mobile Software Developer",
  },
  {
    img: "lu.png",
    name: "Lucía Sánchez León",
    position: "Digital Marketing Analyst",
  },
  {
    img: "lu.png",
    name: "Camila Balian",
    position: "UX/UI Designer",
  },
  {
    img: "lu.png",
    name: "Paulina Méndez",
    position: "HR Manager",
  },
  {
    img: "lu.png",
    name: "Joaquin Matteo",
    position: "Developer Intern",
  },
  {
    img: "lu.png",
    name: "Marcos Tort",
    position: "QA & Testing",
  },
];

const AboutUsTeamSection = ({ t }) => {
  return (
    <section className="AboutUsTeamSection" id="team">
      <img src="/assets/images/about-us/about-us-team-path1.svg" className="about-us-team-path1" alt="" />
      <img src="/assets/images/about-us/about-us-team-path2.png" className="about-us-team-path2" alt="" />
      <img src="/assets/images/about-us/about-us-team-dots1.svg" className="about-us-team-dots1" alt="" />
      <img src="/assets/images/about-us/about-us-team-dots2.svg" className="about-us-team-dots2" alt="" />
      <div className="custom-container">
        <div className="section-header-dark header-wrapper" data-aos="fade-in">
          <h2>{t("about_us.our_team.title")}</h2>
          <img src={"/assets/images/home-services-line.svg"} alt="" />
        </div>
        <div className="row team-card-list">
          {data.map((d, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <AboutUsTeamPersonCard img={d.img} name={d.name} position={d.position} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .AboutUsTeamSection {
          position: relative;
          padding-top: 125px;
          padding-bottom: 50px;
          
          .about-us-team-path1 {
            position: absolute;
            left: 0;
          }

          .about-us-team-path2 {
            position: absolute;
            right: 0;
          }

          .about-us-team-dots1 {
            position: absolute;
            top: 107px;
            right: 156px;
          }

          .about-us-team-dots2 {
            position: absolute;
            bottom: 71px;
            left: 55px;
          }

          .header-wrapper {
            margin-bottom: 125px !important;
          }

          .team-card-list {
            max-width: 1350px !important;
            margin: 0 auto;
          }
        }

        @media screen and (max-width: 1280px) {
          .AboutUsTeamSection {
            position: relative;
            padding-top: 77px;
            padding-bottom: 46px;
            
            .about-us-team-path1 {
              display: none;
            }

            .about-us-team-path2 {
              display: none;
            }

            .about-us-team-dots1 {
              display: none;
            }

            .about-us-team-dots2 {
              display: none;
            }

            .header-wrapper {
              margin-bottom: 63px !important;
            }
          }
        }
      `}</style>
    </section>
  );
};

AboutUsTeamSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsTeamSection);
