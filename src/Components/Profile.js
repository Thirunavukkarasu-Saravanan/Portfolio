import profile from "../Images/profile.JPG";
import React from "react";
import entries from "../Data/data-entry";
import banner from "../Images/banner.png";
import cntct from "../Images/cntct.png";
import cont from "../Images/cont.png";
import gm from "../Images/gm.png";
import ln from "../Images/ln.png";
import lnsb from "../Images/lnsb.png";
import lnc from "../Images/lnc.png";
import lnbc from "../Images/lnbc.png";
import git from "../Images/git.png";
import eml from "../Images/eml.png";

function ProfileCard() {
  let gitUrl = entries.Tags[1].Social1;
  let inUrl = entries.Tags[1].Social2;
  return (
    <div class="container-fluid">
      <div class="container-sm"></div>

      <img
        src={profile}
        class="img-fluid rounded-pill"
        alt="Responsive image"
        width="300"
        alt=""
        loading="lazy"
      ></img>
      <div class="container-xl">
        <h2>Saravanan Thirunavukkarasu</h2>
      </div>
      <div class="container-xl">
        <a class="navbar-brand" href={gitUrl}>
          <img src={git} width="35" height="35" alt=""></img>
        </a>
        <a class="navbar-brand" href={inUrl}>
          <img src={lnsb} width="30" height="30" alt=""></img>
        </a>
        <a class="navbar-brand" href="#">
          <img src={cont} width="30" height="30" alt=""></img>
        </a>
        <a class="navbar-brand" href="#">
          <img src={gm} width="30" height="30" alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
