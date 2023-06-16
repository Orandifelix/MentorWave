import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stats.css";

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <Slider {...settings}>
        <div>
          <img
            className="ui small avatar image"
            src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1298663/60cc7564d4a37d90.af828114ed82.jpg"
            alt="mentor"
          />
          <h4>Donvine <br></br>Software Engineering</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1551473/166e33ee6beef4c4.65c6a5a56b36.jpeg"
            alt="mentor"
          />
          <h4>Cynthia Onzere <br></br>Business consulting</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1416014/513e93905cbbef7c.d88c6442a8a9.jpg"
            alt="mentor"
          />
          <h4>Kelvin Kimaru <br></br>Accounting and Finance</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1544129/c71907abd8fe61c3.2ee03bb59f47.jpg"
            alt="mentor"
          />
          <h4>Wilder Ondieki <br></br>Digital Marketing</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://media.licdn.com/dms/image/C5603AQFKLF_iHQMTbw/profile-displayphoto-shrink_800_800/0/1641103098842?e=2147483647&v=beta&t=24NmEB4hahgZHKZJ9MrEmt5eKklZ0lSiT5dH8ZEX8bQ"
            alt="mentor"
          />
          <h4>Kennedy Wangari <br></br>Data Science</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://media.licdn.com/dms/image/C4D03AQGNkilkf0N3BQ/profile-displayphoto-shrink_800_800/0/1619494200205?e=2147483647&v=beta&t=g0Z02HmdPdmdnAi2Cr93mx_Hf3J9mZ7Cm80pLm_dHYM"
            alt="mentor"
          />
          <h4>Sheilah Birgen <br></br>Business Consulting</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1549334/465d12e43cec1d1c.da54dac9c09f.jpg"
            alt="mentor"
          />
          <h4>Felix Orandi <br></br>Digital Marketing</h4>
        </div>
        <div>
          <img
            className="ui small avatar image"
            src="https://media.licdn.com/dms/image/C4D03AQG8nDuJfUBbLg/profile-displayphoto-shrink_800_800/0/1625092997943?e=2147483647&v=beta&t=n-GEExL8dT2I-uko6pFtFWL5I9CA-jFeRVPtgYbrJ_c"
            alt="mentor"
          />
          <h4>Muthoni Wanyoike <br></br>Data Science</h4>
        </div>
      </Slider>
    );
  }
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
