import React from "react";
import "./footer.css";

const Footer = () => {
  const goToTop = () => {
    document.body.scrollIntoView();
  };
  return (
    <div className="footer">
      <div className="div1foot">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-regular fa-up" onClick={goToTop}>
          {" "}
          ^ Back to top ^
        </i>{" "}
        <br />
        <br></br>
        <div className="all">
          {" "}
          <p>All categories</p>
          <p>site map</p>
          <p>About us</p>
          <p>Help</p>
        </div>
      </div>
      <div className="div2foot">
        <p>The Discovery Family of Networks </p>
        <p>
          {" "}
          © 2023 Warner Bros. Discovery, Inc. or its subsidiaries and
          affiliates. All rights reserved.
        </p>

        <div className="foot1">
          {" "}
          <p className="pa"> Advertise </p> <p> AdChoices </p>{" "}
          <p> Privacy Notice </p> <p> Visitor Agreement</p>{" "}
        </div>

        <p>
          {" "}
          California Privacy Notice Do Not Sell or Share My Personal Information
        </p>
      </div>
    </div>
  );
};

export default Footer;
