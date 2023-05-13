// components/About.js

import Image from "next/image";

import Butter from "buttercms";
import React, { useEffect, useState } from "react";


const butter = Butter(`${process.env.NEXT_PUBLIC_API_KEY}`);

const About = () => {

  const [about, setAbout] = useState({});

    useEffect(() => {
        butter.page
          .retrieve("*", "my-portfolio")
          .then(function (resp) {
            console.log(resp.data.data.fields.about_section);
            setAbout(resp.data.data.fields.about_section);
     
          })
          .catch(function (resp) {
            console.log(resp);
          });
      }, []);


  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            {about?.sub_headline}
          </p>
          <p>{about?.sub_headline}</p>
        </div>
        <div className="about-img">
          <img src={about?.image} className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;
