// import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link as ScrollLink } from "react-scroll";

import "./ImageSlider.css";

const ImageSlider = ({
  slides,
  isNotMap,
  style,
  imageStyle,
  iconSize,
  showCenterText,
}) => {
  const [current, setCurrent] = useState(0);
  const [showText, setShowText] = useState(0);
  const length = slides.length;
  const delay = 5500;

  if (!Array.isArray(slides) || slides.length <= 0) {
    // if is not an array return null
    return null;
  }

  useEffect(() => {
    if (isNotMap) {
    } else {
      const interval = setInterval(
        () =>
          setCurrent((prevIndex) =>
            prevIndex === length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => clearInterval(interval);
    }
  }, [current]);
  const handleDotClick = (index) => {
    setCurrent(index);
  };
  const handleImageLoad = () => {
    setShowText(true);
  };
  return (
    <section className="slider" style={style}>
      {slides.map((slide, index) => (
        <div
          className={index === current ? "myslide myslide-active" : "myslide"}
          key={index}
        >
          {index === current && (
            <div>
              {showCenterText &&
                (showText ? (
                  <div className="slider-contents">
                    <h1
                      className="slide-in"
                      style={{ fontSize: window.innerWidth < 760 && "30px" }}
                    >
                      {slide?.title}
                    </h1>
                    <div className="slide-in-left">
                      <p>{slide?.description ?? "The words"}</p>
                      <ScrollLink
                        to={"about"}
                        smooth={true}
                        spy={true}
                        offset={160}
                        duration={1500}
                      >
                        <Button
                          buttonColor={"btn--blue"}
                          // buttonStyle="btn--outline"
                          rounded={true}
                        >
                          Learn more
                        </Button>
                      </ScrollLink>
                    </div>
                  </div>
                ) : (
                  <div></div>
                ))}
              <img
                src={isNotMap ? slide : slide.image}
                alt="slide image"
                style={imageStyle}
                onLoad={handleImageLoad}
                className={
                  showCenterText ? "slider-image" : "slider-image smaller"
                }
              />
            </div>
          )}
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((image, index) => (
          <span
            key={index}
            className={`slider-dot ${index === current ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
