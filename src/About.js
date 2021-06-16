import React from 'react';
import Common from "./Common";
import web from "../src/images/About.jpg";
const About = () =>{
    return(
       <Common name="Welcome to About page" btnname="Contact Now" visit="/Contact" img={web}/>
    );
}
export default About;