import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import GradientText from "../utilitiescomponent/GradientText";

import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const divs = [
    {
      title: "Support",
      description:
        "Support the global scale of innovative startups in developing countries by facilitating visibility, opportunities, resources and competitions.",
      colorClass: "btn--blue-light",
      percent: 0.56,
    },
    {
      title: "Connect",
      description:
        "Connect founders with global driven ideas and startups to strategic partners, institutions and investors for global expansion.       ",
      colorClass: "orange-gradient",
      icon: "carbon:connect",
      percent: 0.76,
    },
    {
      title: "Mentorship",
      description:
        "Provide mentorship to the next generation of global innovators and startups through acceleration programs and summits.  ",
      colorClass: "btn--blue",
      icon: "ic:round-people-alt",
      percent: 0.96,
    },
  ];
  const TransparentIconContainer = ({ item }) => {
    return (
      <div
        style={{
          margin: 0,
          padding: 0,
          height: "50px",
          width: "50px",
          // maxWidth: "20px",
          borderRadius: "50%",
        }}
        className="transparentGlass centerClass"
      >
        <Icon
          fontSize={"30px"}
          icon={item?.icon ?? "fluent:person-support-20-filled"}
        />
      </div>
    );
  };
  return (
    <>
      <div
        style={{
          padding: window.innerWidth < 760 ? "20px" : "20px",
          margin: "0",
          background: "#201959",
        }}
        id="whatwedo"
      >
        <div className="centerClass">
          <GradientText text={"WHAT WE DO"} dontanimate={true} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            marginTop: "20px",
            flexDirection: window.innerWidth < 760 && "column",
          }}
          data-aos={"fade-right"}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          {divs.map((div, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                padding: "2rem",
                borderRadius: "10px",
              }}
              className={`${div.colorClass} `}
            >
              <TransparentIconContainer item={div} />
              <h2 style={{ color: "white" }}>{div.title}</h2>
              <p style={{ color: "white" }}>{div.description}</p>
              <ProgressBar
                colorClass={"whigte"}
                percent={div.percent ?? 0.19``}
                width={100}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
