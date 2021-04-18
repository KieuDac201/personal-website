import React from "react";
import picProfile from "../assets/img/dac.jpg";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/About.css";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion"


const About = () => {
    return (
        <motion.div variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
        <section className="about"
                
        >
            <div className="about-picture">
               
                    <div className="about-card">
                        <div className="about-card__img">
                            <img src={picProfile} alt="hello" />
                        </div>
                        <h3 className="about-card__name">Kieu Dac</h3>
                        <h4 className="about-card__position">Front-end Developer</h4>
                        <div className="about-card__sci">
                            <a
                                href="https://www.facebook.com/Dac.dep/"
                                target="_blank"
                                rel="noreferrer"
                                className="about-card__link"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.facebook.com/Dac.dep/"
                                target="_blank"
                                rel="noreferrer"
                                className="about-card__link"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://github.com/KieuDac201"
                                target="_blank"
                                rel="noreferrer"
                                className="about-card__link"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.facebook.com/Dac.dep/"
                                target="_blank"
                                rel="noreferrer"
                                className="about-card__link"
                            >
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
                <p>
                Currently a senior student at Ha Noi College Tech and Trading . Passionate about code,
                constantly learn and discover new technology. Doing my best in
                order to complete my task and I want to become a expert IT
          <br /> <br />
          I’m a great place for you to tell a story and let your users know a
          little more about you.
        </p>
            </div>

        </section>
        </motion.div>
    );
};
export default About;
