import React, { useEffect } from "react";
import "./Hero.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

function Hero({
  headline,
  description,
  descriptionFont,
  subdescription,
  subdescriptionFont,
  img,
  imgalt1,
  withBg,
  bgColor,
  marginfrBg,
  isList,
  imgStart,

  showButton,
  buttonLabel,
  buttonLink,
  bgheight,
  btnWidth,
  buttonColor,
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {withBg && window.innerWidth >= 960 && (
        <section
          className="blue_bg"
          style={{ height: bgheight, background: bgColor }}
        ></section>
      )}
      <div
        className="hero__section"
        style={{
          background:
            withBg && window.innerWidth <= 960 && (bgColor ?? "#141874"),
        }}
      >
        <div
          className="row home__hero_row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
            // padding: imgStart === "start" ? "0" : "",
          }}
        >
          <div
            className="col"
            style={{ marginTop: window.innerWidth >= 960 && marginfrBg }}
          >
            <div
              className="hero__text_wrapper"
              data-aos={window.innerWidth < 760 ? "fade-right" : "fade-left"}
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h1
                className="heading"
                style={{
                  color: withBg ? "white" : "#1d293f",
                  fontSize: withBg && "32px",
                }}
              >
                {headline}
              </h1>
              {isList == null && (
                <p
                  className={`description ${descriptionFont}`}
                  style={{ color: withBg ? "white" : "#1d293f" }}
                >
                  {description}
                </p>
              )}
              {isList == null && (
                <p
                  className={`description subdescription ${subdescriptionFont}`}
                  style={{ color: withBg ? "white" : "#1d293f" }}
                >
                  {subdescription}
                </p>
              )}
              {isList && (
                <div className="guarantee_column">
                  {description.map((item) => (
                    <div className="guarantee_row" key={item}>
                      {withBg ? (
                        <BsCheckCircleFill
                          className="g_icon"
                          style={{ color: "#FFCB37" }}
                        />
                      ) : (
                        <AiTwotoneCheckCircle
                          size="8"
                          style={{ color: "#191C73" }}
                        />
                      )}
                      <p key={item} style={{ color: withBg && "white" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {showButton && (
                <Link to={buttonLink ?? "/pricing"}>
                  <Button
                    buttonColor={buttonColor ?? "gradient"}
                    rounded={true}
                    style={{ width: btnWidth }}
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div
            className="col"
            style={{ marginTop: window.innerWidth >= 960 && marginfrBg }}
          >
            <div
              className={
                withBg && window.innerWidth >= 960
                  ? "hero__image withbg"
                  : "hero__image"
              }
            >
              <img src={img} alt={imgalt1} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
