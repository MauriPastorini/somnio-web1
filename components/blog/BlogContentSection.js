import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import BlogStandartCard from "./BlogStandartCard";

export const BlogContentSection = ({ t, posts }) => {
  return (
    <div className="BlogContentSection custom-container">
      <div className="filter-category-group">
        <button className="btn btn-custom-3">Category</button>
        <button className="btn btn-custom-3">Category</button>
        <button className="btn btn-custom-3">Category</button>
        <button className="btn btn-custom-3">Category</button>
      </div>

      <div className="filter-tag-group">
        <button className="btn btn-custom-3">tag</button>
        <button className="btn btn-custom-3">tag</button>
        <button className="btn btn-custom-3">tag</button>
      </div>

      <div className="row">
        {posts.posts.map((post, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <BlogStandartCard post={post} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .BlogContentSection {
          margin-top: -569px;
          position: relative;

          .our-work-list {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 130px;
          }

          .filter-category-group {
            display: flex;
            justify-content: center;
            margin: 0 -15px 28px -15px;

            button {
              padding: 3px 0 !important;
              margin: 3px 15px !important;
              font-size: 20px !important;
              width: 147px !important;
              min-width: 147px !important;
            }
          }

          .filter-tag-group {
            display: flex;
            justify-content: center;
            margin: 0 -15px 114px -15px;

            button {
              padding: 3px 0 !important;
              margin: 3px 15px !important;
              font-size: 20px !important;
              width: 147px !important;
              min-width: 147px !important;
              border-radius: 5px;
            }
          }
        }
      `}</style>
    </div>
  );
};

BlogContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(BlogContentSection);
