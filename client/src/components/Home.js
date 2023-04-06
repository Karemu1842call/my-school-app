import React from "react";
import HeroImg from "../assets/fd.png";

function Home() {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />
            this is <span className="text-accent ">my-school</span> <br />
            Management app
          </h1>

          <p className="py-5 mb-8">
            Are you a entrepreneur and to manage the data needed to run a school
            to too much for you to handle.{" "}
            <span className="text-accent">NO WORRIES!</span> i'm here for you,
            this app does all that for you.
            <span className="lg:text-2xl">
              To see the schools your managing, navigate with the button below.
            </span>
          </p>

          <a
            href="/createform"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            Add a new school
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
          </h2>
      </div>
    </section>
  );
}

export default Home;
