import React from "react";
import iphone11bg from "../../images/home/new-ipad.jpg";

function Thirdsection() {
  return (
    <section
      className="third-highlight-wrapper"
      style={{ backgroundImage: `url(${iphone11bg})` }}
    >
      <div className="internal-wrapper">
        <div className="title-wraper">The New Ipad</div>
        <div className="description-wrapper">
          Just the right amount of everything.
        </div>
        <div className="price-wrapper">
          From $16.62/mo. or $399 with trade‑in.
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
export default Thirdsection;
