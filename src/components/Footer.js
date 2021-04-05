import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaSkype } from "react-icons/fa";
import '../style/Footer.css'
import { Animated } from "react-animated-css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
            <Animated animationIn="fadeInLeft" animationInDuration={1000} animationInDelay={800} isVisible={true}>
                <div className="footer-left">
                    <h4>Address</h4>
                    <p>Thach That - Ha Noi</p>
                </div>
                </Animated>
                <Animated animationIn="fadeInRight" animationInDuration={1000} animationInDelay={800} isVisible={true}>
                <div className="footer-right">
                    <div className="footer-item">
                        <h4>Call</h4>
                        <p>082 7898 103</p>
                    </div>
                    <div className="footer-item">
                        <h4>Email</h4>
                        <p>kieudac18082001@gmail.com</p>
                    </div>
                    <div className="footer-item">
                        <h4>Follow</h4>
                        <p>
                            <a href="https://www.facebook.com/Dac.dep/" target="_blank" className="footer-link">
                                <FaFacebookF  />
                            </a>
                            <a href="" className="footer-link" href="https://www.facebook.com/Dac.dep/" target="_blank">
                                <FaTwitter  />
                            </a>
                            <a href="https://github.com/KieuDac201" className="footer-link" target="_blank">
                                <FaGithub  />
                            </a>
                            <a href="" className="footer-link" href="https://www.facebook.com/Dac.dep/" target="_blank">
                                <FaSkype  />
                            </a>
                        </p>
                    </div>
                </div>
                </Animated>
            </div>
            
        </div>
    )
}

export default Footer
