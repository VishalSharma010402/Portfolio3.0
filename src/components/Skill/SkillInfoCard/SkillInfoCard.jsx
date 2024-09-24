import React from 'react';
import "./SkillInfoCard.css";

const SkillInfoCard = ({heading, skills}) => {
  return <div className="skills-info-card">
    <h6>{heading}</h6>
    <div className="skills-info-content">
        {skills.map((element, index) =>(
            <React.Fragment key={`skill_${index}`}>
                <div className="skill-info">
                    <p>{element.skill}</p>
                    
                    <p className="percentage">{element.percentage}</p>
                </div>
                <div className="skill-progress-bar">
                    <div className="skill-progress" style={{ width : element.percentage }}/>
                </div>
            </React.Fragment>
        ))}
    </div>
  </div>;
};

export default SkillInfoCard;