import React from 'react'
import"./SkillCard.css"


const SkillCard = ({title,image,isActive, onClick}) => {
  return (
    <div
    className={`skills-card ${isActive? "active":""}`}
    onClick={() => onClick()}>
        <div className="skills-img">
          <img src={image} />
        </div>
        <span>{title}</span>
    </div>
  );
};

export default SkillCard