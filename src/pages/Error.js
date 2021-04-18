import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Error.css'
import { pageAnimation } from "../animation";
import { motion } from "framer-motion"


function Error() {
    return (
        <motion.div 
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
            <div className="error"
            variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit">
                <h2>404</h2>
                <h5>Page not found</h5>
                <p>The Page you are looking for doesn't exit or an other error occurred</p>
                <p>Go back <Link  to="/"> Home Page </Link> </p>
                
            </div>
        </motion.div>
    )
}

export default Error;