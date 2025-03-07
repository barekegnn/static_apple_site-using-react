import React from 'react'
import watchLogo from "../../images/icons/watch-series5-logo.png";
import appleCardLogo from "../../images/icons/apple-card-logo.png";
import watchbuety from "../../images/home/watch-series-5.jpg";

function Fourthsection() {
  return (
    <section className="fourth-heghlight-wrapper">
      {/* Left Side - Apple Watch */}
      <div className="left-side-wrapper"
      style={{ backgroundImage: `url(${watchbuety})` }}>
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={watchLogo} alt="Watch Series 5 Logo" />
          </div>
        </div>
        <div className="description-wraper">
          With the new Always-On Retina display.
          <br />
          You’ve never seen a watch like this.
        </div>
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

      {/* Right Side - Apple Card */}
      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={appleCardLogo} alt="Apple Card Logo" />
          </div>
        </div>
        <div className="description-wraper">
          Get 3% Daily Cash on purchases from Apple using Apple Card.
        </div>
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
export default Fourthsection

