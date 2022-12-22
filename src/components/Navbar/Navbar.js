import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/WYT LOGO.png"

const Navbar = () => {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg">
      <div class="container-fluid container navbar-full">
        <Link class="navbar-brand" href="#">
         <img className="img-fluid logo" src={Logo} alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#objective">
                Our Objective
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#expert">
                Expert
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#blog">
                Blog
              </a>
            </li>
          </ul>
          <div>
          <a class="nav-link contact-btn" aria-current="page" href="#contact">
              Contact Us
              </a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
