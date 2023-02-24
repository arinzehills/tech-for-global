import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import GradientText from "../utilitiescomponent/GradientText";

const LeftDiv = ({ handleFixedDivScroll, leftDivRef }) => {
  return (
    <div
      style={{
        maxWidth: window.innerWidth > 760 ? "40%" : "90vw",
        textAlign: "left",
        color: "grey",
        padding: "10%",
        // display: "none",
        maxHeight: "70vh",
        alignItems: "flex-start",
      }}
      className="centerClass withColumn withGap"
      onWheel={handleFixedDivScroll}
      data-aos={window.innerWidth < 769 ? "fade-down" : "fade-right"}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      ref={leftDivRef}
    >
      <GradientText text={"Areas of Focus"} dontanimate={true} />
      <p>
        We focus on diffrent support for diffrent teams and startups in the
        Blockchain, AI & Machine Learning, Finetech SaaS, Web3, Cybersecurity
        Internet of Things, HealthTech
      </p>
      <Link to={"/pricing"}>
        <Button buttonColor={"btn--orange"} rounded={true}>
          Apply
        </Button>
      </Link>
    </div>
  );
};

export default LeftDiv;
