const AgencySayCard = ({ comment }) => {
  return (
    <div className="agency-card">
      <div className="agency-corn__card">
        <div className="agency-corn__content">
          <img className="agency-corn__bg" src="./assets/images/common/corn-card.svg" alt="" />
          <h3 className="agency-corn__text">{comment.project}</h3>
        </div>
      </div>
      <div className="agency-card__header">
        <img className="agency-card__header-img" src={comment.img} alt="" />
        <div className="agency-card__header-info">
          <h3>{comment.name}</h3>
          <h3>{`${comment.position}, ${comment.project}`}</h3>
          <img className="mt-10" src="./assets/images/common/stars.svg" />
        </div>
      </div>
      <p className="agency-card__text">{comment.comment}</p>
      <style jsx>{`
        .agency-card {
          background: #fff;
          // max-width: 965px;
          height: 367px;
          border-radius: 34px;
          position: relative;
          padding: 62px 113px;
          margin-left: 100px;
          margin-right: 100px;
          -webkit-box-shadow: 0px 10px 55px -12px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 10px 55px -12px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 10px 55px -12px rgba(0, 0, 0, 0.75);

          .agency-corn__card {
            position: absolute;
            top: 0;
            right: 0;
            width: 162px;
            height: 162px;

            .agency-corn__content {
              position: relative;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;

              .agency-corn__bg {
                position: absolute;
                top: -1px;
                right: -1px;
                width: 162px;
              }
              .agency-corn__text {
                font-size: 27px;
                font-weight: bold;
                z-index: 1;
              }
            }
          }

          .agency-card__header {
            display: flex;

            .agency-card__header-img {
              margin-right: 41px;
              width:118px;
              height: 118px;
              border-radius: 50%;
            }

            .agency-card__header-info {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;

              h3 {
                color: #001739;
                font-size: 27px;
                font-weight: bold;
                margin-bottom: 0;
                cursor: initial;
              }

              img {
                max-width: 122px;
              }
            }
          }

          .agency-card__text {
            color: #001739;
            font-size: 20px;
            // max-width: 646px;
            margin-top: 38px;
          }
        }
      `}</style>
    </div>
  );
};

export default AgencySayCard;
