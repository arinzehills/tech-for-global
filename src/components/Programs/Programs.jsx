import "./Programs.css";
import React from "react";

const Programs = () => {
  const style = {};
  const programs = [
    {
      title: "Tech For Global Competitions",
      image: "/images/techsupport1.jpg",
    },
    { title: "Tech For Global Summits", image: "/images/techsupport3.jpg" },
    {
      title: " Tech For Global Accelerator",
      image: "/images/techsupport2.jpg",
    },
    { title: "Tech For Global Community", image: "/images/techsupport3.jpg" },
  ];
  return (
    <div id="programs" className="centerClass">
      <div className="programs-section-outer">
        <div className="centerClass">
          <h2 style={{ color: "var(--blue-text)" }}>
            Our Tech For Global Programs
          </h2>
        </div>
        <div className="programs-section">
          {programs.map((program) => (
            <div className="programs-container" key={program.title}>
              <img src={program.image} alt="" height={265} width="100%" />
              <h3 style={{ color: "#3b2a82" }}>{program.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
