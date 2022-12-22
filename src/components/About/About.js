import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-header container">
        <h2 className="text-center">About</h2>
      </div>
      <div className="about-content container">
        <p>
          Watch your Thoughts is an Online Counsealing platform. We provide
          counsealing and emotional support that promotes mental wellbeing. It
          allows you to discuss issues related to your personal,professional and
          academic life. Our aim is to provide a safe space for people to talk,
          to feel comfortable, supported, empowered and make mental health
          accessible to everyone. We promote holistic wellness, talk about signs
          and triggers of mental and emotional distress and share knowledge on
          developing healthy coping mechanism and self help techniques. So join
          us on this path to let go and take care of yourself because your
          mental health is your most valuable asset.
        </p>
      </div>
      <div className="about-footer text-center container">
        <p>
          * Please note we are not a medical service or sucide prevention
          helpline. If you are feeling suicidal, we suggest you
          immediately call up the crisis helpline numbers
        </p>
      </div>
    </div>
  );
};

export default About;
