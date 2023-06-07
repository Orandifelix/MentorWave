import React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

function Footer() {
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
                rel="noreferrer"
              >
                <Icon name="facebook" size="large" />
              </a>
            </div>
            <div className="text-icon">
              <a
                href="https://www.youtube.com/mentorwave/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <Icon name="youtube" size="large" />
              </a>
            </div>
            <div className="text-icon">
              <a
                href="https://twitter.com/mentorwave"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="twitter square" size="large" />
              </a>
            </div>
            <div className="text-icon">
              <a
                href="https://www.instagram.com/mentorwave/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <Icon name="instagram" size="large" />
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
                required
              />
              <button type="submit">
                <Icon name="arrow right" size="small" />
              </button>
            </form>
          </div>
        </div>

        <div className="copyright">
          <hr />
          <p className="footer">
            <small>&copy; 2023 MentorWave. All rights reserved</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
