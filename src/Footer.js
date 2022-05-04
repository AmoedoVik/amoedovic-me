import React from "react";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={"https://i.ibb.co/b1F8mdj/logo.png"} alt="" className="footer__img pointer" />
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 Victor Amoêdo.
      </span>
    </div>
  );
}

export default Footer;
