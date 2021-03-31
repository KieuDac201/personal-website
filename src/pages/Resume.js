import React from 'react'
import '../style/Resume.css'

const Resume = () => {
    return (
        <div className="resume">
            <div className="container">
                <div className="title">Resume</div>
                <div className="resume-box">
                    <div className="resume-title"><span>Education</span><button className="btn">Download CV</button></div>
                    <div className="resume-content">
                        <div className="resume-info">
                            <div className="resume-time">2019 - 2022</div>
                            <h5>HA NOI TRADE & TECH COLLEGE</h5>
                            <p>Degree Level</p>
                            <p>Tan Lap, Dan Phuong</p>
                        </div>
                        <p className="resume-desc">
                        I'm a paragraph. Click here to add your own text and edit me. 
                        It’s easy. Just click “Edit Text” or double click me to add your 
                        own content and make changes to the font.
                        <br />
                        <br />
                        I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                    <div className="resume-content">
                        <div className="resume-info">
                            <div className="resume-time">2019 - Present</div>
                            <h5>JOB POSITION</h5>
                            <p>Company Name</p>
                            <p>Company Location</p>
                        </div>
                        <p className="resume-desc">
                        I'm a paragraph. Click here to add your own text and edit me. 
                        It’s easy. Just click “Edit Text” or double click me to add your 
                        own content and make changes to the font.
                        <br />
                        <br />
                        I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                    <div className="resume-content">
                        <div className="title-skill">Professional skillset</div>
                        <ul className="skill-list">
                            <li className="skill-item"><span className="square"></span>HTML, CSS</li>
                            <li className="skill-item"><span className="square"></span>JAVASCRIPT</li>
                            <li className="skill-item"><span className="square"></span>BOOTSTRAP</li>
                            <li className="skill-item"><span className="square"></span>REACT JS</li>
                        </ul>
                        <div className="title-skill">Languages</div>
                        <ul className="skill-list">
                            <li className="skill-item"><span className="square"></span>English</li>
                            <li className="skill-item"><span className="square"></span>Vietnamese</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;