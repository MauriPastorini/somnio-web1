import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const HomeOurBlogSection = ({ t }) => {
  return (
    <div className="HomeOurBlogSection pt-100">
      <img src={`/assets/images/home-path-blog.svg`} alt="" className="path-blog-img-1" />
      <div className="section-header-dark" data-aos="fade-in">
        <h2>{t("home.our_blog.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>
      <style jsx>
        {`
          .HomeOurBlogSection {
            height: 100vh;
            max-height: 900px;
            position: relative;
          }

          .path-blog-img-1 {
            position: absolute;
            left: 0px;
            top: 0px;
          }
        `}
      </style>
    </div>
  );
};

HomeOurBlogSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

HomeOurBlogSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeOurBlogSection);
