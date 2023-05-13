 // components/Contact.js

import Butter from "buttercms";
import React, { useEffect, useState } from "react";

const butter = Butter(`${process.env.NEXT_PUBLIC_API_KEY}`);

const Contact = () => {
    const [contact, setContact] = useState({});

    useEffect(() => {
        butter.page
          .retrieve("*", "my-portfolio")
          .then(function (resp) {
            console.log(resp.data.data.fields.contact_section);
            setContact
            
            (resp.data.data.fields.contact_section);
    
          })
          .catch(function (resp) {
            console.log(resp);
          });
    }, []);

    return (
        <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>{contact?.sub_headline}</p>
            <a href={contact?.button_url} className='cta-btn'>{contact?.button_label}</a>
        </div>
    )
}

export default Contact;