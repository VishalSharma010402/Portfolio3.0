import React from "react";
import "./WorkExp.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExpCard from "./ExpCard/ExpCard";
import Slider from "react-slick";

const WorkExp = () => {
  // const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slideToScroll: 1,
    arrow: false,
    response: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="exp-container">
      <h5>Work Experience</h5>

      <div className="exp-content">
        <Slider {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExpCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExp;
