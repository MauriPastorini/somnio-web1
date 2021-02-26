import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";
import { Poster, Poster2 } from "./Poster";
import Link from "next/link";

export const PostContentSection = ({ t, post }) => {
  return (
    <div className="PostContentSection custom-container">
      <Link href="/blog">
        <a className="back-link">
          <img src="/assets/images/post/arrow.svg" alt="" />
        </a>
      </Link>
      <h2 className="primary-tag">{post.primary_tag.name}</h2>
      <h1 className="title">{post.title}</h1>
      <p className="excerpt">{post.custom_excerpt}</p>

      <div className="post-img-wrapper">
        <img className="main-img" src={post.feature_image} alt="" />
      </div>

      <Poster
        author={post.primary_author}
        published_at={post.published_at}
        tags={post.tags}
        reading_time={post.reading_time}
      />

      <html className="inner-html" dangerouslySetInnerHTML={{ __html: post.html }}></html>

      <Poster2 
        author={post.primary_author} 
        published_at={post.published_at} 
        reading_time={post.reading_time} 
      />

      <style jsx>{`
        .PostContentSection {
          margin-top: -269px;
          position: relative;
          background-color: #fff;
          border-radius: 36px;
          padding: 58px 159px !important;

          .back-link{
            position:absolute;
            top: 66px;
            left: 71px;
          }

          .primary-tag {
            color: #09a7fe;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 23px;
            text-transform: uppercase;
          }

          .title {
            font-size: 45px;
            line-height: 90px;
            margin-bottom: 20px;
            font-weight: bold;
          }

          .excerpt {
            font-size: 23px;
            font-weight: 700;
            font-style: italic;
            margin-bottom: 20px;
            color: #7c7c7c;
          }

          .post-img-wrapper {
            position: relative;
            width: 100%;
            min-height: 400px;
            margin-bottom: 47px;

            .main-img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .custom-container {
          max-width: 1280px !important;
        }

        @media screen and (max-width: 1600px) {
          .PostContentSection {
            margin-top: -369px;
          }
        }

        @media screen and (max-width: 1280px) {
          .PostContentSection {
            margin-top: -508px;
          }
        }
      `}</style>
    </div>
  );
};

PostContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(PostContentSection);
