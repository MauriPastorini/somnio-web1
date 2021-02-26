import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const BlogPostCard = ({ post, large }) => {
  // {
  //   "title": "Creating a custom theme",
  //   "slug": "themes",
  //   "custom_excerpt": "Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",
  //   "feature_image": "https://static.ghost.org/v3.0.0/images/creating-a-custom-theme.png",
  //   "tags": [
  //     {
  //       "id": "6012d300aa4a5c001c109adb",
  //       "name": "Getting Started",
  //       "slug": "getting-started",
  //       "description": null,
  //       "feature_image": null,
  //       "visibility": "public",
  //       "meta_title": null,
  //       "meta_description": null
  //     }
  //   ],
  //   "authors": [
  //     {
  //       "id": "5951f5fca366002ebd5dbef7",
  //       "name": "Ghost",
  //       "slug": "ghost",
  //       "profile_image": "https://static.ghost.org/v3.0.0/images/ghost.png",
  //       "cover_image": null,
  //       "bio": "You can delete this user to remove all the welcome posts",
  //       "website": "https://ghost.org",
  //       "location": "The Internet",
  //       "facebook": "ghost",
  //       "twitter": "ghost",
  //       "meta_title": null,
  //       "meta_description": null
  //     }
  //   ]
  // }

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
          {post.tags.map((tag) => (
            <span className="post-card-category-item">{tag.name}</span>
          ))}
        </div>

        <footer className="post-card-author">
          <img className="post-card-thumbnail" src={post.authors[0].profile_image} alt="" />
          <div className="text-wrapper">
            <p className="post-card-name">{post.authors[0].name}</p>
            <p className="post-card-publish-date">{`${format(new Date(post.published_at), "MMM dd")} · 3 min read`}</p>
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
          text-transform:uppercase;
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
      `}</style>
    </article>
  );
};

export default BlogPostCard;
