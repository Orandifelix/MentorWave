import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stats.css"

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000, 
    };

    return (
      <Slider {...settings}>
        <div className="quote">
          <blockquote>
            <i className="quote left large blue icon centered"></i>I had the
            privilege of being mentored by an incredible professional through
            MentorWave.Thanks to their mentorship, I gained confidence, expanded
            my network, and achieved my professional goals. I highly recommend
            MentorWave to anyone seeking mentorship opportunities.
            <i className="quote right blue icon centered"></i>
          </blockquote>
          <h2>
            - Sarah
          </h2>
        </div>
        <div className="quote">
          <blockquote>
            <i className="quote left icon large red centered"></i>
            MentorWave has been a game-changer for me. Our mentoring sessions
            were transformative. My mentor went above and beyond to provide
            personalized guidance, offer constructive feedback, and share
            invaluable resources. I am grateful for Mentor Wave's commitment to
            fostering meaningful mentor-mentee relationships.{" "}
            <i className="quote right red icon centered"></i>
          </blockquote>
          <h2>
            - John
          </h2>
        </div>
        <div className="quote">
          <blockquote>
            <i className="quote left icon pink large centered"></i>Being part of
            MentorWave has been an incredible experience. The platform not only
            connected me with a highly knowledgeable and accomplished mentor but
            also provided a structured framework for our mentorship journey. My
            mentor helped me set meaningful goals, develop new skills, and
            overcome challenges. Their unwavering support and commitment to my
            growth were truly remarkable.{" "}
            <i className="quote right pink icon centered"></i>
          </blockquote>
          <h2>
            - Michael
          </h2>
        </div>
      </Slider>
    );
  }
}

function Testimony() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <Carousel />
    </div>
  );
}

export default Testimony;
