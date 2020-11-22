import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Saravanan Thirunavukkarasu</h2>
          </div>
          {/* Column2 */}
          <div className="col">LinkedIn GitHub Email</div>
          {/* Column3 */}
          {/* <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div> */}
        </div>

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Saravanan Thirunavukkarasu | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
