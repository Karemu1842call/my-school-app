import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <>
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About My System
          </h2>

          <p className="pb-5">
            Hey User, This app is a school management system that can be used to manage schools in its day to day activities
          </p>
          <p className="pb-5">
            This Application is effective in viewing and manipulating data in critical areas in a organization.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
