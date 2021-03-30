import React from 'react'

function Card({title, subTitle, text, img}) {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <h4 className="card-subtitle">{subTitle}</h4>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-img"><img src={img} alt=""/></div>
        </div>
    )
}

export default Card
