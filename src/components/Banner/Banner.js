import React from 'react';
import './Banner.css'
import homeBanner from "../../assets/homeimage.png"

const Banner = () => {
    return (
        <div className='top-banner container'>
        <div className="banner-text">
            <h2>Supporting your journey <br></br> towards mental <span className='highlight'>wellbeing</span></h2>
            </div>   
            <div className="banner-image">
                <img src={homeBanner} alt="" />
                </div>     
      </div>
    );
};

export default Banner;