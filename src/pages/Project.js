import React from 'react'
import Card from '../components/Card'
import dataCard from '../assets/dataCard'
import '../style/Project.css'
import { Animated } from "react-animated-css";

const Project = () => {
    return (<>
        <div className="project">
                <div className="container">
                    <div className="title">Project</div>
                    <div className="project-desc">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                    <div className="project-card">
                        {dataCard.map((card, i) => {
                            return <a href={card.link} target="_blank" rel="noreferrer"><Card title={card.title} subTitle={card.subTitle} text={card.text} img={card.img} key={i} /></a>
                        })}
                    </div>
                </div>
        </div>
    </>
    );
}
export default Project;