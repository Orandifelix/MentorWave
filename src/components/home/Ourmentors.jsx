import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stats.css";

function Carousel() {
  const { mentors } = useContext(AppContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {mentors.map((mentor) => (
        <div key={mentor.id}>
          <img
            className="ui small avatar image"
            src={mentor.image}
            alt={mentor.name}
          />
          <h4>
            {mentor.name} <br></br> {mentor.expertise}
          </h4>
        </div>
      ))}
    </Slider>
  );
}

function Ourmentors() {
  return (
    <div className="ourmentors">
      <h1 medium>Meet our mentors</h1>
      <Carousel />
    </div>
  );
}

export default Ourmentors;
