import React, { useState } from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";
import Swal from "sweetalert2";

function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscription(event) {
    event.preventDefault();
    if (email === "") {
      Swal.fire({
        icon: "warning",
        title: "Action forbidden",
        text: "Please enter a valid email address before submitting",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "I understand",
      });
      return false;
    }
    Swal.fire({
      icon: "success",
      title: "Success",
      text: `${email} has been successfully subscribed to receive notifications`,
      showCloseButton: true,
      footer: "Made a mistake? <a href='#'> Click here to unsubscribe </a>",
    });
    setEmail("");
  }
  return (
    <>
      <div className="main">
        <div className="links stackable">
          <div className="row-links">
            <h5>ABOUT</h5>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Become a Partner </a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Investors relations</a>
              </li>
            </ul>
          </div>
          <div className="row-links">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="row-links">
            <h5>FOLLOW US</h5>
            <div className="text-icon">
              <a
                href="https://www.facebook.com/mentorwave/"
                target="_blank"
                rel="noreferrer">
                <Icon name="facebook" size="large" color="blue" />
              </a>
            </div>
            <div className="text-icon">
              <a
                href="https://www.youtube.com/mentorwave/"
                target="_blank"
                rel="noreferrer"
                className="text-white">
                <Icon name="youtube" size="large" color="red" />
              </a>
            </div>
            <div className="text-icon">
              <a
                href="https://twitter.com/mentorwave"
                target="_blank"
                rel="noreferrer">
                <Icon name="twitter square" size="large"color="blue" />
              </a>
            </div>
            <div className="text-icon">
              <a
                href="https://www.instagram.com/mentorwave/"
                target="_blank"
                rel="noreferrer"
                className="text-white">
                <Icon name="instagram" size="large" color="pink"/>
              </a>
            </div>
          </div>
          <div className="row-links">
            <h5>CONTACT US</h5>
            <ul>
              <li>
                <a href="#">020-3430-2330</a>
              </li>
              <li>
                <a href="#">+254-711-111-111 </a>
              </li>
              <li>
                <a href="#">mentorwave@gmail.com</a>
              </li>
              <li>
                <a href="#">mentorwave.com</a>
              </li>
            </ul>
          </div>
          <div className="row-links">
            <h5>NEWSLETTER</h5>
            <p>Subscribe to our newsletter</p>
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" onClick={(e) => handleSubscription(e)}>
                <Icon name="arrow right" size="small" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr/>
        <p className="footer">
          &copy; 2023 MentorWave. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
