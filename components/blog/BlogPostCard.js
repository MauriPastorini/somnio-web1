import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const BlogPostCard = ({ post, large }) => {
  return (
    <article className={`${large ? "post-card-large" : "post-card-normal"}`}>
      <div className="post-card-img">
        <Link href={`/post/${post.slug}`}>
          <a className="post-card-image-link">
            <img
              className="post-card-image img-fluid"
              src={post.feature_image || "/assets/images/common/image-placeholder.png"}
              alt=""
            />
          </a>
        </Link>
      </div>

      <div className="post-card-content">
        <h2 className="post-card-primary-tag">{post.primary_tag.name}</h2>

        <Link href={`/post/${post.slug}`}>
          <a className="post-card-content-link">
            <h2 className="post-card-title">{post.title}</h2>
            <p className="post-card-excerpt">{post.custom_excerpt}</p>
          </a>
        </Link>

        <div className="post-card-category-list">
          {post.tags.map((tag, i) => (
            <span key={i} className="post-card-category-item">{tag.name}</span>
          ))}
        </div>

        <footer className="post-card-author">
          <img className="post-card-thumbnail" src={post.authors[0].profile_image} alt="" />
          <div className="text-wrapper">
            <p className="post-card-name">{post.authors[0].name}</p>
            <p className="post-card-publish-date">{`${format(new Date(post.published_at), "MMM dd")} · ${post.reading_time} min read`}</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .post-card-normal {
          width: 100%;
          display: flex;
          flex-direction: column;
          flex: auto;

          .post-card-img {
            margin-bottom: 44px;
            width: 100%;
          }
        }

        .post-card-large {
          width: 100%;
          display: flex;
          flex: auto;

          .post-card-img {
            width: 100%;
          }

          .post-card-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 0 0 40px;
          }
        }

        .post-card-image-link {
          color: #15171a;
          position: relative;
          text-decoration: none;
          flex: 1 1 auto;
          margin-bottom: 0;
          min-height: 380px;
          display: block;

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;
          }
        }

        .post-card-content-link {
          color: #15171a;
          position: relative;
          text-decoration: none;
        }

        .post-card-primary-tag {
          color: #0999f0;
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .post-card-title {
          font-size: 38px;
          line-weight: 40px;
          font-weight: bold;
          color: #001739;
          margin-bottom: 22px;
        }

        .post-card-excerpt {
          font-size: 20px;
          line-weight: 27px;
          margin-bottom: 16px;
        }

        .post-card-category-list {
          margin-bottom: 26px;
          display: flex;
          flex-wrap: wrap;

          .post-card-category-item {
            font-size: 16px;
            font-weight: bold;
            background-color: #0999f0;
            color: #fff;
            padding: 8px 21px;
            border-radius: 49px;
            margin-right: 16px;
          }
        }

        .post-card-author {
          display: flex;

          .post-card-thumbnail {
            width: 53px;
            height: 53px;
            margin-right: 21px;
            border-radius: 50%;
          }

          .text-wrapper {
            .post-card-name {
              margin-bottom: 4px;
              color: #1e6ac5;
              font-size: 17px;
            }
            .post-card-publish-date {
              font-size: 17px;
              color: #707070;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .post-card-content-link {
            color: #15171a;
            position: relative;
            text-decoration: none;
          }

          .post-card-primary-tag {
            font-size: 16px;
            margin-bottom: 7px;
          }

          .post-card-title {
            font-size: 24px;
            line-weight: 24px;
            margin-bottom: 12px;
          }

          .post-card-excerpt {
            font-size: 15px;
            line-weight: 19px;
            margin-bottom: 16px;
          }

          .post-card-category-list {
            margin-bottom: 20px;

            .post-card-category-item {
              font-size: 14px;
            }
          }

          .post-card-author {
            display: flex;

            .post-card-thumbnail {
              width: 45px;
              height: 45px;
            }
          }
        }
      `}</style>
    </article>
  );
};

export default BlogPostCard;
