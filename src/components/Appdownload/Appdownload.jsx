import React from "react";
import "./Appdownload.css";
import { assets } from "../../assets/assets";

const Appdownload = () => {
  return (
    <div>
      <div className="app-download" id="app-download">
        <p>
          For Better Experience Download <br /> HotChill app
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="playstore img" />
          <img src={assets.app_store} alt="appstore img" />
        </div>
      </div>
    </div>
  );
};

export default Appdownload;
