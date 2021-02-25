import Link from "next/link";
import React from "react";

const BlogStandartCard = ({ post }) => {
  return (
    <div className="BlogStandartCard">
      <Link href={`/post/${post.slug}`}>
        <a>
          <img className="main-img img-fluid" src="/assets/images/common/image-placeholder.png" alt="" />
        </a>
      </Link>

      <h2 className="type-title">OUTSOURCING</h2>

      <Link href={`/post/${post.slug}`}>
        <a>
          <h2 className="title">{post.title}</h2>
        </a>
      </Link>

      <p className="excerpt">{post.custom_excerpt}</p>

      <div className="category-list">
        <span className="category-item">App</span>
        <span className="category-item">Mas categorias</span>
      </div>

      <div className="poster">
        <img className="poster-thumbnail" src="/assets/images/about-us/lu.png" alt="" />
        <div className="text-wrapper">
          <p className="poster-name">Lucía Sánchez de León</p>
          <p className="publish-date">Feb 17 · 3 min read</p>
        </div>
      </div>

      <style jsx>{`
        .BlogStandartCard {
          width: 100%;
          margin-bottom: 50px;

          & > a {
              text-decoration: none;
          }

          .main-img {
            width: 100%;
            margin-bottom: 44px;
          }

          .type-title {
            color: #0999f0;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 14px;
          }

          .title {
            font-size: 38px;
            line-weight: 40px;
            font-weight: bold;
            color: #001739;
            margin-bottom: 22px;
          }

          .excerpt {
            font-size: 20px;
            line-weight: 27px;
            margin-bottom: 16px;
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

          .poster {
            display: flex;

            .poster-thumbnail {
              width: 53px;
              height: 53px;
              margin-right: 21px;
            }
            .text-wrapper {
              .poster-name {
                margin-bottom: 4px;
                color: #1e6ac5;
                font-size: 17px;
              }
              .publish-date {
                font-size: 17px;
                color: #707070;
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default BlogStandartCard;
