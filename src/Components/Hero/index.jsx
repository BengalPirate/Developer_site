//import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import me from '../../assets/me.png'
import Achievement from '../../Commons/Achievement'

const Hero = () => {
  return (
    <section id='hero'>
        <div className="wrapper info-container">
            <div className="column">
                <h3 className='sub-title' data-aos="fade-right">
                    Hi, Im <span className="primary"> Brandon Newton </span>
                </h3>
                <h1 className="heading-1" data-aos="fade-up">
                    A <span className="gradient-text">Fullstack</span> Developer
                </h1>
                <p className="muted" data-aos="fade-up" data-aos-delay="200">
                    With a strong foundation in computer engineering and a deep dive 
                    into full-stack development, I am adept at creating robust, scalable, 
                    and efficient applications. My journey in technology has equipped me with 
                    a diverse skill set, allowing me to tackle complex challenges and develop 
                    seamless user experiences.
                </p>
                <div className="flex-center buttons-wrapper">
                    <Link to='services' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn more</Link>
                    <Link to='contact' smooth={true} className='btn' data-aos="fade-left" data-aos-delay="1500" data-aos-offset="50">Get started</Link>
                </div>
            </div>
            <div className="column hero-image">
                <img src={me} alt=""/>
            </div>
        </div>
        <div className="achievement-cluster">
            <div className="wrapper">
                <Achievement/>
            </div>
        </div>
    </section>
  )
}

export default Hero