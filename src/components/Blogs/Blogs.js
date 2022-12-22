import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Modal2 from "../Modal/Modal2";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {

  return (
    <div className="blog-container " id="blog">

      <Modal/>
      <Modal2/>

      <div className="blog-header">
        <h2 className="text-center">Blog</h2>
      </div>
      <div className="blog-content container row w-full mx-auto">

            <div className="first-blog col-lg-6 col-md-6 col-sm-12 mb-5">
                  <div className="blog-image">
                      <img type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src='https://i.postimg.cc/KvM5rfgY/female-psychologist-consulting-patient-desk-hospital.jpg' alt="" />
                  </div>
                  <div className="blog-text">
                      <h1>
                      "What are these therapy approaches?"
                      </h1>
                  </div>
              </div>

            <div className="first-blog col-lg-6 col-md-6 col-sm-12">
                  <div className="blog-image" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <img src='https://i.postimg.cc/KvM5rfgY/female-psychologist-consulting-patient-desk-hospital.jpg' alt="" />
                  </div>
                  <div className="blog-text">
                      <h1>
                      "Curation? Aggregation? What's the difference?"
                      </h1>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Blogs;
