import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

export const PostContentSection = ({ t, post }) => {
  console.log("post", post);
  return (
    <div className="PostContentSection custom-container">
      <h2 className="type-title">DESIGN</h2>
      <h1 className="title">{post.title}</h1>
      <p className="excerpt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id justo enim. Nam sodales sapien pretium metus
        mattis, et commodo tortor rutrum. In vel orci in metus mattis interdum. Nunc dictum vitae sapien nec faucibus.
      </p>
      <img className="main-img" src="/assets/images/post/main-img.png" alt="" />

      <div className="poster-wrapper">
        <div className="poster">
          <img className="poster-thumbnail" src="/assets/images/about-us/lu.png" alt="" />
          <div className="text-wrapper">
            <p className="poster-name">Lucía Sánchez de León</p>
            <p className="publish-date">Feb 17 · 3 min read</p>
          </div>
        </div>
        <div className="category-list">
          <span className="category-item">App</span>
          <span className="category-item">Mas categorias</span>
        </div>
      </div>

      <div className="inner-html" dangerouslySetInnerHTML={{ __html: post.html }}></div>

      <hr />

      <div className="poster-wrapper">
        <div className="poster2">
          <img className="poster-thumbnail" src="/assets/images/about-us/lu.png" alt="" />
          <div className="text-wrapper">
            <p className="poster-name">Lucía Sánchez de León</p>
            <p className="publish-date">Feb 17 · 3 min read</p>
          </div>
        </div>
        <p className="poster-info">
          Lucía is the marketing equat id ligula sit amet dapibus. Suspendisse tincidunt placerat diam. Integer ultrices
          vehicula urna.
        </p>
      </div>

      <style jsx>{`
        .PostContentSection {
          margin-top: -269px;
          position: relative;
          background-color: #fff;
          border-radius: 36px;
          padding: 58px 159px !important;

          hr{
            height: 2px;
            color: #707070;
            margin-bottom: 42px;
          }

          .type-title {
            color: #09a7fe;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 23px;
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

          .main-img {
            margin-bottom: 47px;
          }

          .poster-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 73px;
          }

          .poster {
            display: flex;

            .poster-thumbnail {
              width: 53px;
              height: 53px;
              margin-right: 21px;
            }
            .text-wrapper {
              color: #9d9d9d;

              .poster-name {
                font-size: 17px;
                margin-bottom: 4px;
              }
              .publish-date {
                font-size: 17px;
              }
            }
          }

          .poster2 {
            display: flex;

            .poster-thumbnail {
              height: 74px;
              margin-right: 29px;
              width: 74px;
            }

            .text-wrapper {
              .poster-name {
                color: #001738;
                font-size: 17px;
                font-weight: 700;
                margin-bottom: 4px;
              }
              
              .publish-date {
                font-size: 17px;
                color: #9d9d9d;
              }
            }
          }
          
          .category-list {
            margin-bottom: 26px;
            display: flex;
            flex-wrap: wrap;
            
            .category-item {
              font-size: 16px;
              font-weight: bold;
              background-color: #0999f0;
              color: #fff;
              padding: 8px 21px;
              border-radius: 49px;
              margin-right: 16px;
            }
          }
          
          .poster-info {
            max-width: 389px;
            font-style: italic;
            font-size: 19px;
            line-height: 26px;
            color: #939393;
          }
          
          .inner-html {
            color: #001738;
            margin-bottom: 74px;
            
            p {
              font-size: 23px !important;
            }
          }
        }

        .custom-container {
          max-width: 1280px !important;
        }
      `}</style>
    </div>
  );
};

PostContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(PostContentSection);
