import React from 'react'
import Skills from '../layouts/Skills'
import { skillsBar, } from '../../profile'

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">About Me</h1>
                </div>
                <p className="lead about-text"> 
                    I am a Web Developer with a background in social services. I've earned a Full-Stack Developer certificate from the UC Davis Coding Bootcamp, where I've gained skills in JavaScript, React, back-end databases, and all things MERN stack. 
                    <br></br>
                    <br></br>
                    I am a curious life-long student, with a never-ceasing drive to learn, grow, and mature. However, my aim in acquiring of knowledge and skills is not an end onto itself, but a means of using my privileged access to education and resources for the sake of blessing others. My purpose is to not be a type of a cul-de-sac where my work only ends in serving me, but instead to be a type of a highway that serves others. 
                    <br></br>
                    <br></br>
                    Hence, I’m super passionate about developing tools that alleviate the challenges of life and help everyday people thrive. 
I’m ready and open to contribute to your software. Feel free to Contact Me
                </p>
            </div>
            </div>
            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}̀
                </div> 
            </div>
        </div>
    )
}

export default About
