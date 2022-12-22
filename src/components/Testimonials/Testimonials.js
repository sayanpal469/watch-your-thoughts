import React from "react";
import "./Testimonials.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="testimonials-container py-5">
      
      <div id="carouselExampleDark" className="container testimonial-div carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

        <div className="testimonial-review carousel-inner px-4">
          <div className="text-white carousel-item active">
            <sup>
              <RiDoubleQuotesL className="quote text-white"></RiDoubleQuotesL>
            </sup>
            <br></br>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur id autem deleniti non, dicta dolore laborum corporis
              itaque, aliquam nulla quisquam voluptatem fugit tempora sequi
              molestias ipsam velit cupiditate impedit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus officia tempore
              harum architecto minus, reprehenderit unde aspernatur dignissimos
              numquam? Accusamus harum possimus voluptates laudantium quae cum
              assumenda ducimus, beatae accusantium?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Modi cumque aut, culpa, obcaecati
              natus praesentium quod quis quasi quibusdam at, delectus quam!
              Rerum, labore. Delectus quisquam rem distinctio amet rerum modi,
              soluta fugit? Exercitationem tempore voluptatem odit id ipsa
              iusto!
              <p className="mt-4">- Genevieve Harleen, Company Name</p>
            </p>
          </div>
          <div className="text-white carousel-item ">
            <sup>
              <RiDoubleQuotesL className="quote text-white"></RiDoubleQuotesL>
            </sup>
            <br></br>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur id autem deleniti non, dicta dolore laborum corporis
              itaque, aliquam nulla quisquam voluptatem fugit tempora sequi
              molestias ipsam velit cupiditate impedit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus officia tempore
              harum architecto minus, reprehenderit unde aspernatur dignissimos
              numquam? Accusamus harum possimus voluptates laudantium quae cum
              assumenda ducimus, beatae accusantium?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Modi cumque aut, culpa, obcaecati
              natus praesentium quod quis quasi quibusdam at, delectus quam!
              Rerum, labore. Delectus quisquam rem distinctio amet rerum modi,
              soluta fugit? Exercitationem tempore voluptatem odit id ipsa
              iusto!
              <p className="mt-4">- Genevieve Harleen, Company Name</p>
            </p>
          </div>
          <div className="text-white carousel-item ">
            <sup>
              <RiDoubleQuotesL className="quote text-white"></RiDoubleQuotesL>
            </sup>
            <br></br>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur id autem deleniti non, dicta dolore laborum corporis
              itaque, aliquam nulla quisquam voluptatem fugit tempora sequi
              molestias ipsam velit cupiditate impedit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus officia tempore
              harum architecto minus, reprehenderit unde aspernatur dignissimos
              numquam? Accusamus harum possimus voluptates laudantium quae cum
              assumenda ducimus, beatae accusantium?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Modi cumque aut, culpa, obcaecati
              natus praesentium quod quis quasi quibusdam at, delectus quam!
              Rerum, labore. Delectus quisquam rem distinctio amet rerum modi,
              soluta fugit? Exercitationem tempore voluptatem odit id ipsa
              iusto!
              <p className="mt-4">- Genevieve Harleen, Company Name</p>
            </p>
          </div>
        </div>

        <div className="arrow-testimonials mt-5">
                    <AiOutlineArrowLeft className="arrows text-white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"></AiOutlineArrowLeft>
                    <AiOutlineArrowRight className="arrows text-white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"></AiOutlineArrowRight>
                </div>
      </div>
    </div>
  );
};

export default Testimonials;
