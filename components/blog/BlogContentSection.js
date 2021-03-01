import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import BlogPostCard from "./BlogPostCard";
import useWindowSize from "../../hooks/useWindowSize";

export const BlogContentSection = ({ t, posts, tags }) => {

  console.log("posts", posts)
  const [filter, setfilter] = useState({ tag: "", category: "" });
  const size = useWindowSize();
  const isMobile = size.width < 1280;

  const getPostFiltered = () => {
    if (filter.tag !== "") {
      const hasTag = (post) => post.tags.some((tag) => tag.name == filter.tag);
      return posts.posts.filter(hasTag);
    } else {
      return posts.posts;
    }
  };

  return (
    <div className="BlogContentSection custom-container">
      <div className="filter-tag-group">
        <button
          onClick={() => setfilter({ ...filter, tag: "" })}
          className={`btn btn-custom-3 ${filter.tag == "" && "btn-custom-3-active"}`}
        >
          All
        </button>
        {tags.tags.map((tag) => (
          <button
            onClick={() => setfilter({ ...filter, tag: tag.name })}
            className={`btn btn-custom-3 ${filter.tag == tag.name && "btn-custom-3-active"}`}
          >
            {tag.name}
          </button>
        ))}
      </div>

      {filter.tag == "" && filter.category == "" && (
        <>
          <div className="row">
            <div className="card-wrapper col-12 col-md-6">
              <BlogPostCard post={posts.posts[0]} />
            </div>
            <div className="card-wrapper col-12 col-md-6">
              <BlogPostCard post={posts.posts[1]} />
            </div>
          </div>
          <div className="row">
            <div className="card-wrapper col-12">
              <BlogPostCard large post={posts.posts[3]} />
            </div>
          </div>
          <div className="row">
            <div className="card-wrapper col-12 col-md-6">
              <BlogPostCard post={posts.posts[4]} />
            </div>
            <div className="card-wrapper col-12 col-md-6">
              <BlogPostCard post={posts.posts[5]} />
            </div>
          </div>
          <div className="row">
            <div className="card-wrapper col-12 col-md-6 col-lg-4">
              <BlogPostCard post={posts.posts[6]} />
            </div>
            <div className="card-wrapper col-12 col-md-6 col-lg-4">
              <BlogPostCard post={posts.posts[7]} />
            </div>
            <div className="card-wrapper col-12 col-md-6 col-lg-4">
              <BlogPostCard post={posts.posts[7]} />
            </div>
          </div>
        </>
      )}

      {(filter.tag !== "" || filter.category !== "") && (
        <div className="row">
          {getPostFiltered().map((post, i) => {
            const isLarge = post.custom_excerpt.length > 150;
            const classes = "col-12 " + `${(!isLarge || isMobile) && "col-md-6"} card-wrapper`;
            return (
              <div key={i} className={classes}>
                <BlogPostCard large={isLarge && !isMobile} post={post} />
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .BlogContentSection {
          margin-top: -569px;
          position: relative;
          overflow: hidden;

          .row{
            --bs-gutter-x: 8rem;
          }

          .card-wrapper {
            margin-bottom: 50px;
          }

          // .filter-category-group {
          //   display: flex;
          //   justify-content: center;
          //   margin: 0 -15px 28px -15px;

          //   button {
          //     padding: 3px 0 !important;
          //     margin: 3px 15px !important;
          //     font-size: 20px !important;
          //     width: 147px !important;
          //     min-width: 147px !important;
          //   }
          // }

          .filter-tag-group {
            display: flex;
            justify-content: center;
            margin: 0 -15px 114px -15px;
            flex-wrap: wrap;

            button {
              padding: 3px 20px !important;
              margin: 3px 15px !important;
              font-size: 20px !important;
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
