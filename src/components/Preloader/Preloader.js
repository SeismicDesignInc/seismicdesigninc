import bg1 from "@/images/icons/preloader.svg";
import React from "react";

const Preloader = ({ loading, bg = bg1, className = "" }) => {
  return (
    <div
      style={{
        zIndex: loading ? 9999 : -1,
      }}
      className={`preloader animated${loading ? "" : " fadeOut"} ${className}`}
    >
      <div style={{ backgroundImage: `url(${bg1.src})` }} className="icon"></div>
    </div>
  );
};

export default Preloader;
