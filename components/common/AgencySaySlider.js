import AgencySayCard from "./AgencySayCard";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const AgencySaySlider = ({ comments }) => {
  const size = useWindowSize();

  const getCustomCenterPadding = (width) => {
    if (width > 1800) return "440px";
    else if (width > 1500) return "340px";
    else if (width > 1280) return "240px";
    else if (width > 880) return "140px";
    else return "55px";
  };
  const centerPadding = getCustomCenterPadding(size.width);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: centerPadding,
    slidesToShow: 1,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
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
