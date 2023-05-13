// components/Works.js

import Butter from "buttercms";
import React, { useEffect, useState } from "react";

const butter = Butter(`${process.env.NEXT_PUBLIC_API_KEY}`);


const Works = () => {
    const [work, setWork] = useState({});

    useEffect(() => {
        butter.page
          .retrieve("*", "my-portfolio")
          .then(function (resp) {
            console.log(resp.data.data.fields.work_section);
            setWork(resp.data.data.fields.work_section);
    
          })
          .catch(function (resp) {
            console.log(resp);
          });
    }, []);

    return (
        <div className="projects-container">
            <h2>Works</h2>
            <h4>{work?.sub_headline}</h4>
            <br/>
            <div className="projects-grid">
                {work?.works?.map((work, index) => {
                    return (
                        <div className="project-card" key={index}>
                            <div className="project-header">
                                <img src={work.folder_label} className="folder-icon" width={50} height={50}/>
                           
                                <div className="small-icons">
                                    <a href={work.github_url}><img src={work.github_label} /></a>
                                </div>
                            </div>
                            <h3>{work.work_headline}</h3>
                            <p>{work.work_text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Works;
