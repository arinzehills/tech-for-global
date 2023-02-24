import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  window.addEventListener("scroll", function () {
    headerRef.current?.classList.toggle("sticky", window.scrollY > 0);
  });

  const ScrollTo = ({ to, title }) => {
    return (
      <ScrollLink
        to={to ?? "about"}
        smooth={true}
        spy={true}
        offset={160}
        duration={1500}
      >
        {title ?? "About"}
      </ScrollLink>
    );
  };

  return (
    <header ref={headerRef}>
      {/* <h3>EXCELLENT TRIP</h3> */}
      <img src="images/logo.png" alt="" height={"90px"} />
      <nav ref={navRef}>
        <Link to={"/"}>Home</Link>
        <ScrollTo to={"whatwedo"} title={"What we do"} />
        <ScrollTo />
        <ScrollTo to={"programs"} title={"Programs"} />

        {/* <Link className="nav-links">What we do</Link> */}
        <FaTimes className="nav-btn nav-close-btn" onClick={showNavbar} />
      </nav>
      <div style={{ gap: window.innerWidth > 769 && "1rem" }}>
        <Button
          buttonColor={"btn--blue-light"}
          rounded={true}
          style={{ margin: 0, height: "40px", minWidth: "90px" }}
        >
          Apply
        </Button>
      </div>
      {/* <HiMenuAlt4 className="nav-btn" onClick={showNavbar} /> */}
      <Icon
        className="nav-btn"
        icon="fa6-solid:bars-staggered"
        onClick={showNavbar}
      />
    </header>
  );
};

export default Navbar;
