import web from "../src/images/Home.jpg";
import app from "../src/images/About.jpg";
import graphic from "../src/images/Home.jpg";
import software from "../src/images/About.jpg";
import digital from "../src/images/Home.jpg";
import android from "../src/images/About.jpg";

const Cdata = [ 
    {
        imgsrc: web,
        title: "Web Development",
        visit: "/",
        btnname: "Home Page"
    },
    {
        imgsrc: app,
        title: "App Development",
        visit: "/About",
        btnname: "About Page"
    },
    {
        imgsrc: graphic,
        title: "Graphic Designer",
        visit: "/",
        btnname: "Home Page"
    },
    {
        imgsrc: software,
        title: "Software Development",
        visit: "/About",
        btnname: "About Page"
    },
    {
        imgsrc: digital,
        title: "Digital Marketing",
        visit: "/",
        btnname: "Home Page"
    },
    {
        imgsrc: android,
        title: "Andriod Development",
        visit: "/About",
        btnname: "About Page"
    },
];
export default Cdata;