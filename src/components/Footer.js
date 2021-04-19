import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaSkype } from "react-icons/fa";
import '../style/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h4>Address</h4>
                    <p>Thach That - Ha Noi</p>
                </div>
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
                            <a href="https://www.facebook.com/Dac.dep/" target="_blank" className="footer-link" rel="noreferrer" >
                                <FaFacebookF  />
                            </a>
                            <a  className="footer-link" href="https://www.facebook.com/Dac.dep/" target="_blank" rel="noreferrer" >
                                <FaTwitter  />
                            </a>
                            <a href="https://github.com/KieuDac201" className="footer-link" target="_blank" rel="noreferrer" >
                                <FaGithub  />
                            </a>
                            <a  className="footer-link" href="https://www.facebook.com/Dac.dep/" target="_blank" rel="noreferrer" >
                                <FaSkype  />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
