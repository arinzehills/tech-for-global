import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import GradientText from "../utilitiescomponent/GradientText";
import "./AreaofFocus.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AreaofFocus = () => {
  const rightDivRef = useRef(null);

  const handleFixedDivScroll = (e) => {
    if (rightDivRef.current && window.innerWidth > 769) {
      rightDivRef.current.scrollBy({ top: e.deltaY });
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const areas = [
    { area: "BlockChain", details: "", icon: "eos-icons:blockchain" },
    {
      area: "AI & Machine Learning",
      details: "",
      icon: "carbon:machine-learning-model",
    },
    { area: "Fintech", details: "", icon: "mdi:finance" },
    { area: "Saas", details: "", icon: "simple-icons:jirasoftware" },
    { area: "Web3", details: "", icon: "simple-icons:hive-blockchain" },
    { area: "Cybersecurity", details: "", icon: "icon-park-solid:blockchain" },
    { area: "Internet of Things", details: "", icon: "simple-icons:iota" },
    {
      area: "HealthTech",
      details: "",
      icon: "material-symbols:menstrual-health-sharp",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        // height: window.innerHeight < 760 ? "1000px" : "70vh",
        // height: "90vh",

        paddingTop: "3rem",
        paddingBottom: "3rem",
        // padding: "1rem",
        margin: 0,
        flexDirection: window.innerWidth < 760 && "column",
      }}
      id={"areaoffocus"}
    >
      <div
        style={{
          maxWidth: window.innerWidth > 760 ? "40%" : "90vw",
          textAlign: "left",
          color: "grey",
          padding: "10%",
          // display: "none",
          alignItems: "flex-start",
        }}
        className="centerClass withColumn withGap"
        onWheel={handleFixedDivScroll}
        data-aos={window.innerWidth < 769 ? "fade-down" : "fade-right"}
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
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
      <div
        style={{
          flex: 1,
          overflow: window.innerWidth < 760 ? "visible" : "scroll",
          // scrollbarWidth: "none",
          backgroundColor: "transparent",
          maxHeight: window.innerWidth > 760 && "80vh",
          // width: window.innerWidth < 760 && "90%",
          scrollbarColor: " red yellow",
        }}
        ref={rightDivRef}
      >
        {areas.map((area, index) => (
          <div
            key={area}
            style={{
              height: "100px",
              // margin: "10px",
              color: "white",
              width: window.innerWidth < 760 ? "280px" : "300px",
              marginTop: "3rem",
            }}
            className="focus-content__container"
            // data-aos={index < 3 && "fade-left"}
          >
            <div
              className="transparentGlass withBlur"
              style={{
                padding: "0.5rem",
                marginTop: "-1.5rem",
                height: "60px",
                width: "60px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{ background: "#2255ff", height: "60px", width: "60px" }}
                className="iconClass"
              >
                <Icon
                  icon={area.icon ?? "eos-icons:blockchain"}
                  fontSize="25px"
                />
              </div>
            </div>

            <h2 style={{ color: "var(--blue-text)" }}> {area.area}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaofFocus;
