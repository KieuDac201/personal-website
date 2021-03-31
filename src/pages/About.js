import React from 'react'
import picProfile from '../dac.jpg'
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section className="about">
            <div className="about-picture">
                <div className="about-card">
                    <div className="about-card__img">
                        <img src={picProfile} alt="hello"/>
                    </div>
                    <h3 className="about-card__name">Kieu Dac</h3>
                    <h4 className="about-card__position">Front-end Developer</h4>
                    <div className="about-card__sci">
                        <a href="https://www.facebook.com/Dac.dep/" target="_blank" className="about-card__link">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.facebook.com/Dac.dep/" target="_blank" className="about-card__link">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/KieuDac201" target="_blank" className="about-card__link">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/Dac.dep/"  target="_blank" className="about-card__link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <h1>Hello</h1>
                <h3>Here's who I am & what I do</h3>
                <div className="about-content__btn">
                    <Link to="/resume">
                        <button className="btn">Resume</button>
                    </Link>
                    <Link to="/project">
                        <button className="btn btn-outline">Projects</button>
                    </Link>
                    
                    
                </div>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    <br /> <br />
                    I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </section>
    );
}
export default About;