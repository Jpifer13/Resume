import React from 'react';
import '../styles/skills.css';  // Ensure this CSS file is included

const Skills = () => {
  const skills = {
    Languages: [
      { name: 'Python', level: 'Advanced', proficiency: 100 },
      { name: 'Node', level: 'Advanced', proficiency: 100 },
      { name: 'Java', level: 'Intermediate', proficiency: 70 },
      { name: 'JavaScript', level: 'Intermediate', proficiency: 70 },
    ],
    Databases: [
      { name: 'Oracle', level: 'Advanced', proficiency: 100 },
      { name: 'SQLAlchemy', level: 'Advanced', proficiency: 100 },
      { name: 'PostgreSQL', level: 'Advanced', proficiency: 100 },
      { name: 'DynamoDB', level: 'Advanced', proficiency: 100 },
    ],
    Frameworks: [
      { name: 'FastAPI', level: 'Advanced', proficiency: 100 },
      { name: 'Flask', level: 'Advanced', proficiency: 100 },
      { name: 'OpenAPI/Swagger', level: 'Advanced', proficiency: 100 },
      { name: 'Angular', level: 'Intermediate', proficiency: 70 },
      { name: 'React/Redux', level: 'Intermediate', proficiency: 70 },
    ],
  };

  return (
    <div className="skills-container">
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-section">
          <h3 className="category-title">{category}</h3>
          {skills[category].map((skill, index) => (
            <div key={skill.name} className="skill-bar">
              <p className="skill-name">
                {skill.name}: {skill.level}
              </p>
              <div className="bar-container">
                <div className="bar">
                  <div
                    className={`bar-filled ${
                      skill.proficiency === 100 ? 'full' : ''
                    }`}
                    style={{ width: `${skill.proficiency}%` }}
                    data-index={index}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
