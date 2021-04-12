import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Error.css'

function Error() {
    return (
        <div className="error">
            <h2>404</h2>
            <h5>Page not found</h5>
            <p>The Page you are looking for doesn't exit or an other error occurred</p>
            <p>Go back <Link  to="/"> Home Page </Link> </p>
            
        </div>
    )
}

export default Error;