import { format } from "date-fns";

export const Poster = ({ author, published_at, reading_time, tags }) => {
  return (
    <div className="poster-wrapper">
      <div className="poster">
        <img className="poster-thumbnail" src={author.profile_image} alt="" />
        <div className="text-wrapper">
          <p className="poster-name">{author.name}</p>
          <p className="publish-date">{`${format(new Date(published_at), "MMM dd")} · ${reading_time} min read`}</p>
        </div>
      </div>

      <div className="category-list">
        {tags.map((tag) => (
          <span className="category-item">{tag.name}</span>
        ))}
      </div>

      <style jsx>{`
        .poster-wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 73px;
        }

        .poster {
          display: flex;

          .poster-thumbnail {
            width: 55px;
            height: 55px;
            margin-right: 21px;
            border-radius: 50%;
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

        .category-list {
          align-items: flex-start;
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
      `}</style>
    </div>
  );
};

export const Poster2 = ({ author, published_at, reading_time }) => {
  return (
    <>
      <hr />
      <div className="poster-wrapper">
        <div className="poster2">
          <img className="poster-thumbnail" src={author.profile_image} alt="" />
          <div className="text-wrapper">
            <p className="poster-name">{author.name}</p>
            <p className="publish-date">{`${format(new Date(published_at), "MMM dd")} · ${reading_time} min read`}</p>
          </div>
        </div>
        <p className="poster-info">{author.bio}</p>
      </div>
      <style jsx>{`
        hr {
          height: 2px;
          color: #707070;
          margin-bottom: 42px;
        }

        .poster-wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 73px;
        }

        .poster2 {
          display: flex;

          .poster-thumbnail {
            height: 74px;
            width: 74px;
            margin-right: 29px;
            border-radius: 50%;
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

        .poster-info {
          max-width: 389px;
          font-style: italic;
          font-size: 19px;
          line-height: 26px;
          color: #939393;
        }
      `}</style>
    </>
  );
};
