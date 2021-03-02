const ServicesProcessCard = ({ data }) => {

  const imgStyle = {
    boxShadow: `32px 32px 81px -38px ${data.color}`,
    WebkitBoxShadow: `32px 32px 81px -38px ${data.color}`,
  }

  return (
    <div className="ServicesProcessCard">
      <img
        className="process-card-img"
        src={`/assets/images/services/${data.img}`}
        alt=""
        style={imgStyle}
      />
      <div className="process-card-text-wrapper">
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
      <style jsx>{`
        .ServicesProcessCard {
          display: flex;
          position: relative;

          .process-card-img {
            max-width: 170px;
            border-radius: 50%;
          }

          .process-card-text-wrapper {
            position: absolute;
            left: 260px;
            top: 0;

            max-width: 430px;

            h3 {
              font-size: 30px;
            }

            p {
              color: #707070;
              font-size: 20px;
              line-height: 25px;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesProcessCard;