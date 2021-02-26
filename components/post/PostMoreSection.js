import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import BlogPostCard from "../blog/BlogPostCard";

export const PostMoreSection = ({ t, posts, post }) => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const post_index = posts.findIndex(p => post.title === p.title)

  let selection_1;
  let selection_2;
  
  let flag = true;
  while(flag){
    selection_1 = getRandomInt(0, posts.length);
    flag = selection_1 === post_index;
  }

  flag = true;
  while(flag){
    selection_2 = getRandomInt(0, posts.length);
    flag = selection_2 === post_index || selection_2 === selection_1;
  }

  return (
    <div className="PostMoreSection custom-container">
      <div className="section-header-dark header-wrapper" data-aos="fade-in">
        <h2>{t("post.text_1")}</h2>
        <img src={"/assets/images/home-services-line.svg"} alt="" />
      </div>

      <div className="row">
        <div className="card-wrapper col-12 col-md-6">
          <BlogPostCard post={posts[selection_1]} />
        </div>
        <div className="card-wrapper col-12 col-md-6">
          <BlogPostCard post={posts[selection_2]} />
        </div>
      </div>

      <style jsx>{`
        .PostMoreSection {
          margin-bottom: 103px;
        }
      `}</style>
    </div>
  );
};

PostMoreSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(PostMoreSection);
