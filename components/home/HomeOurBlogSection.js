import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import BlogPostCard from "../blog/BlogPostCard";
import Slider from "react-slick";

const HomeOurBlogSection = ({ t, posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="HomeOurBlogSection custom-container">
      <img src={`/assets/images/home-path-blog.svg`} alt="" className="path-blog-img-1" />
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("home.our_blog.title")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="post-list row">
        <div className="card-wrapper col-md-6 col-xl-4">
          <BlogPostCard post={posts[0]} />
        </div>
        <div className="card-wrapper col-md-6 col-xl-4">
          <BlogPostCard post={posts[1]} />
        </div>
        <div className="card-wrapper col-md-6 col-xl-4">
          <BlogPostCard post={posts[2]} />
        </div>
      </div>

      <div className="post-list-mobile">
        <Slider {...settings}>
          <div className="card-wrapper">
            <BlogPostCard post={posts[0]} />
          </div>
          <div className="card-wrapper">
            <BlogPostCard post={posts[1]} />
          </div>
          <div className="card-wrapper">
            <BlogPostCard post={posts[2]} />
          </div>
        </Slider>
      </div>

      <style jsx>
        {`
          .HomeOurBlogSection {
            position: relative;
            padding-top: 163px;
            padding-bottom: 147px;
            overflow: hidden;
          }

          .post-list {
          }

          .post-list-mobile {
            display: none;
          }

          .path-blog-img-1 {
            position: absolute;
            left: 0px;
            top: 0px;
          }

          .header-wrapper {
            margin-bottom: 105px !important;
          }

          .row {
            --bs-gutter-x: 8rem;
          }

          @media screen and (max-width: 767px) {
            .HomeOurBlogSection {
              position: relative;
              padding-top: 163px;
              padding-bottom: 147px;
            }

            .header-wrapper {
              margin-bottom: 52px !important;
            }

            .post-list {
              display: none;
            }

            .post-list-mobile {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

HomeOurBlogSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(HomeOurBlogSection);
