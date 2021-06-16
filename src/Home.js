import React from 'react';
import Common from "./Common";
import web from "../src/images/Home.jpg";
const Home = () =>{
    return(
       <Common name="Grow Your Business with" btnname="Get Started" visit="/Service" img={web}/>
    );
}
export default Home;
