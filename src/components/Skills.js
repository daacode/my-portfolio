  // components/Skills.js

  import Butter from "buttercms";
  import React, { useEffect, useState } from "react";

  const butter = Butter(`${process.env.NEXT_PUBLIC_API_KEY}`);


  const Skills = () => {

    const [skill, setSkill] = useState({});

      useEffect(() => {
          butter.page
            .retrieve("*", "my-portfolio")
            .then(function (resp) {
              console.log(resp.data.data.fields.skills_section);
              setSkill(resp.data.data.fields.skills_section);
      
            })
            .catch(function (resp) {
              console.log(resp);
            });
      }, []);

      return (
        <div className="skills-container">
          <h2>Skills</h2>
          <h4>{skill?.skill_headline}</h4>
          <br/>
          <div className="grid-skills">
                      {skill?.skills?.map((skill, index) => {
                    return (
                      <div className="skill-card" key={index}>
                        <p >{skill.terminology}</p>
                      </div>
                    );
                  })}
              </div>
          </div>
      )
    }
    
    export default Skills;