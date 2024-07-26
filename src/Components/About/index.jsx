//import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources'

const About = () => {
  return (
    <section id='about'>
        <div className="wrapper">
            <div className="section-header">
                <h1 className="heading-1" data-aos="fade-left">
                    <span className="gradient-text">About Me</span>
                </h1>
                <h4 className="sub-title muted" data-aos="fade-left">
                    I am a Computer Engineering Student at Jackson State University
                    with an interest in Full Stack Development (Web and Mobile), 
                    Cybersecurity, Hardware PCB design, Robotics, Artifical Intelligence, and Business 
                    Development. I have won awards in 3 separate hackathons including first place in 
                    the Fall 2023 BE-Smart Hackathon Hosted by American Airlines. 
                </h4>
            </div>
            <div className="group">
                {
                    whyChooseMe.map((list,index)=>(
                        <div className='flex-center group-item' data-aos="fade-right" key={index}>
                            <div className="flex-center icon-wrapper">
                                {list.icon}
                            </div>
                            <h4 className="title">{list.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default About