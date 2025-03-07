import React from "react";
import iconImage from "../../images/icons/16.png";
import "../../css/styles.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="internal-wrapper">
        <div className="upper-text-container">
          1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
          promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in
          good condition. Additional trade‑in values require purchase of a new
          iPhone, subject to availability and limits. Must be at least 18. Apple
          or its trade-in partners reserve the right to refuse or limit any
          Trade In transaction for any reason. In‑store trade‑in requires
          presentation of a valid, government-issued photo ID (local law may
          require saving this information). Sales tax may be assessed on full
          value of new iPhone. Additional terms from Apple or Apple’s trade-in
          partners may apply. Monthly pricing: Available to qualified customers
          and requires 0% APR, 24‑month installment loan with Citizens One, and
          iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon.{" "}
          <a href="#"> Full terms apply</a>.
        </div>
        <div className="footer-links-wrapper">
          {[1, 2, 3, 4, 5].map((num) => (
            <div className={`links-wrapper-${num}`} key={num}>
              <h3>
                {num === 1
                  ? "Shop and Learn"
                  : num === 2
                  ? "Services & Account"
                  : num === 3
                  ? "Apple Store"
                  : num === 4
                  ? "For Business, Education & Healthcare"
                  : "Apple Values & About Apple"}
              </h3>
              <ul>
                {num === 1 &&
                  [
                    "Mac",
                    "iPad",
                    "iPhone",
                    "Watch",
                    "TV",
                    "Music",
                    "AirPods",
                    "HomePod",
                    "iPod touch",
                    "Accessories",
                    "Gift Cards",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                {num === 2 &&
                  [
                    "Apple Music",
                    "Apple News+",
                    "Apple TV+",
                    "Apple Arcade",
                    "Apple Card",
                    "iCloud",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                {num === 3 &&
                  [
                    "Find a Store",
                    "Genius Bar",
                    "Today at Apple",
                    "Apple Camp",
                    "Field Trip",
                    "Apple Store App",
                    "Refurbished and Clearance",
                    "Financing",
                    "Apple Trade In",
                    "Order Status",
                    "Shopping Help",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                {num === 4 &&
                  [
                    "Apple and Business",
                    "Shop for Business",
                    "Apple and Education",
                    "Shop for College",
                    "Apple and Healthcare",
                    "Manage Your Apple ID",
                    "Apple Store Account",
                    "iCloud.com",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                {num === 5 &&
                  [
                    "Find a Store",
                    "Genius Bar",
                    "Today at Apple",
                    "Apple Camp",
                    "Field Trip",
                    "Apple Store App",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper">
          <div className="copyright">
            Copyright © 2019 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms">
            <ul>
              {[
                "Privacy Policy",
                "Terms of Use",
                "Sales and Refunds",
                "Legal",
                "Site Map",
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-country">
            <div className="flag-wrapper">
              <img src={iconImage} alt="Country Flag" />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
