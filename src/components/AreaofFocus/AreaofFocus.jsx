import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import GradientText from "../utilitiescomponent/GradientText";
import "./AreaofFocus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LeftDiv from "./LeftDiv";

const AreaofFocus = () => {
  const rightDivRef = useRef(null);
  const leftDivRef = useRef(null);

  const handleFixedDivScroll = (e) => {
    if (rightDivRef.current && window.innerWidth > 769) {
      // leftDivRef.current.style.position = "static";
      // rightDivRef.current.style.marginLeft = "40vw";
      rightDivRef.current.scrollBy({ top: e.deltaY });
    } else {
      leftDivRef.current.style.position = "relative";
    }
    // if (
    //   rightDivRef.current &&
    //   rightDivRef.current.scrollHeight ===
    //     rightDivRef.current.clientHeight + rightDivRef.current.scrollTop
    // ) {
    //   console.log("upper one");
    //   rightDivRef.current.scrollBy({ top: e.deltaY });

    //   return;
    // }
    // console.log("down one");
    // leftDivRef.current.style.overflow = "scroll";
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const areas = [
    {
      area: "BlockChain",
      details: "",
      icon: "eos-icons:blockchain",
      image: "/images/bl.jpg",
    },
    {
      area: "AI & Machine Learning",
      details: "",
      icon: "carbon:machine-learning-model",
      image: "/images/ai.jpg",
    },
    {
      area: "Fintech",
      details: "",
      icon: "mdi:finance",
      image: "/images/fintech.jpg",
    },
    {
      area: "Saas",
      details: "",
      icon: "simple-icons:jirasoftware",
      image: "/images/saas.jpg",
    },
    {
      area: "Web3",
      details: "",
      icon: "simple-icons:hive-blockchain",
      image: "/images/web3.jpg",
    },
    {
      area: "Cybersecurity",
      details: "",
      icon: "icon-park-solid:blockchain",
      image: "/images/css.jpg",
    },
    {
      area: "Internet of Things",
      details: "",
      icon: "simple-icons:iota",
      image: "/images/iot.jpg",
    },
    {
      area: "HealthTech",
      details: "",
      icon: "material-symbols:menstrual-health-sharp",
      image: "/images/hlt.jpg",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        // height: window.innerHeight < 760 ? "1000px" : "70vh",
        // height: "90vh",
        width: "100vw",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        // padding: "1rem",
        margin: 0,
        flexDirection: window.innerWidth < 760 && "column",
      }}
      id={"areaoffocus"}
    >
      <LeftDiv
        handleFixedDivScroll={handleFixedDivScroll}
        leftDivRef={leftDivRef}
      />
      <div
        style={{
          overflow: window.innerWidth < 760 ? "visible" : "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          backgroundColor: "transparent",
          maxHeight: window.innerWidth > 760 && "95vh",
          // width: window.innerWidth < 760 && "90%",
          scrollbarColor: " red yellow",
        }}
        ref={rightDivRef}
        className={window.innerWidth < 760 && "centerClass withColumn"}
      >
        {areas.map((area, index) => (
          <div
            key={area}
            style={{
              // height: "100px",
              // margin: "10px",
              color: "white",
              width: window.innerWidth < 760 ? "270px" : "300px",
              marginTop: "3rem",
            }}
            className="focus-content__container"
            // data-aos={index < 3 && "fade-left"}
          >
            <div
              className="transparentGlass withBlur"
              style={{
                padding: "0.5rem",
                marginTop: "-1.8rem",
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
            <img
              src={area.image ?? "/images/techsupport1.jpg"}
              height="200px"
              alt=""
              style={{ borderRadius: "20px", width: "100%", marginTop: "1rem" }}
            />
            <h2 style={{ color: "var(--blue-text)" }}> {area.area}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaofFocus;
