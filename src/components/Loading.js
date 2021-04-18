import React from 'react'
import imgLoading from '../assets/img/Plant.gif'
import '../style/Loading.css'


export default function Loading() {
    return (
        <div className="loading">
            <img src={imgLoading} alt="loading" />
        </div>
    )
}

