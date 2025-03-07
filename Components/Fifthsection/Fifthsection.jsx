import React from "react";
import appleTvLogo from "../../images/icons/apple-tv-logo.png";
import servantLogo from "../../images/icons/servant-logo.png";
import appleTv from "../../images/home/apple-tv-background.jpg";

function Fifthsection() {
  return (
    <section className="fifth-heghlight-wrapper">
      {/* Left Side - Apple TV Show */}
      <div
        className="left-side-wrapper"
        style={{ backgroundImage: `url(${appleTv})` }}
      >
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={appleTvLogo} alt="Apple TV Logo" />
          </div>
        </div>

        <div className="tvshow-logo-wraper">
          <img src={servantLogo} alt="Servant Logo" />
          <div className="watch-more-wrapper">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
      </div>

      {/* Right Side - AirPods Pro */}
      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">AirPods Pro</div>
        </div>

        <div className="description-wraper">Magic like you’ve never heard.</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Fifthsection;
