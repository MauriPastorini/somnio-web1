import AgencySayCard from "./AgencySayCard";
import Slider from "react-slick";

const AgencySaySlider = ({ comments }) => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "440px",
    slidesToShow: 1,
    speed: 500,
    // autoplay: true,
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
    </div>
  );
};

export default AgencySaySlider;
