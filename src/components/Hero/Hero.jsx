import React from "react";
import Spline from "@splinetool/react-spline";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="main-container">
      <div className="text-content">
        <span>this side</span>
        <h1>
          <span>V</span>ishal
        </h1>
        <h1>
          Sharma<span>.</span>
        </h1>
        <h3>
          Passionate Frontend Developer | Transfering Ideas into Seamless and
          Visually Stunning Web Application
        </h3>
      </div>
      <div className="img-content">
        <Spline scene="https://prod.spline.design/xjMcOPQtCU2aCNPg/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;
