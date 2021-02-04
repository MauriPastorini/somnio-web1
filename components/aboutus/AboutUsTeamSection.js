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
    <div className="AboutUsTeamSection mt-100  mb-100">
      <img src="./assets/images/about-us/about-us-team-path1.svg" className="about-us-team-path1" alt="" />
      <img src="./assets/images/about-us/about-us-team-path2.png" className="about-us-team-path2" alt="" />
      <img src="./assets/images/about-us/about-us-team-dots1.svg" className="about-us-team-dots1" alt="" />
      <img src="./assets/images/about-us/about-us-team-dots2.svg" className="about-us-team-dots2" alt="" />
      <div className="custom-container">
        <div className="section-header-dark" data-aos="fade-in">
          <h2>{t("about_us.our_team.title")}</h2>
          <img src={"./assets/images/home-services-line.svg"} alt="" />
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div key={i} className="col-sm-4 col-md-3">
              <AboutUsTeamPersonCard img={d.img} name={d.name} position={d.position} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .AboutUsTeamSection {
          position: relative;
        }

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
          top: 100px;
          right: 100px;
        }
        .about-us-team-dots2 {
          position: absolute;
          bottom: 100px;
          left: 100px;
        }

        .team-card-list {
        }
      `}</style>
    </div>
  );
};

AboutUsTeamSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

AboutUsTeamSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(AboutUsTeamSection);
