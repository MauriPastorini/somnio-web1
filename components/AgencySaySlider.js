import AgencySayCard from "./AgencySayCard";
import Slider from "react-slick";

const AgencySaySlider = ({ comments }) => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="AgencySaySlider">
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <AgencySayCard key={index} comment={comment} />
        ))}
      </Slider>
        <style jsx>{`
        .AgencySaySlider {

          .slick-list {
            padding: 90px 200px !important;
          }
        
          .slick-dots {
            bottom: -100px;
        
            li {
              background: transparent;
              border-radius: 50%;
              border: 2px solid #ffffff;
              cursor: pointer;
              margin-left: 10px;
              margin-right: 10px;
              opacity: 1;
              padding: 5px;
        
              button::before {
                opacity: 0;
                color: transparent;
              }
            }
        
            li.slick-active {
              background: #ffffff !important;
              border: 2px solid #ffffff;
              border-radius: 50%;
              cursor: pointer;
              margin-left: 10px;
              margin-right: 10px;
              padding: 5px;
        
              button::before {
                opacity: 0;
                color: transparent;
              }
            }
          }
        }
        
        `}</style>
    </div>
  );
};

export default AgencySaySlider;
