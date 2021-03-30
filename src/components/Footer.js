import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>Thach That - Ha Noi</p>
                </div>
                <div className="footer-right">
                    <div className="footer-item">
                        <h4>Call</h4>
                        <p>082 7898 103</p>
                    </div>
                    <div className="footer-item">
                        <h4>Write</h4>
                        <p>kieudac18082001@gmail.com</p>
                    </div>
                    <div className="footer-item">
                        <h4>Follow</h4>
                        <p>
                            <a href="" className="footer-link">
                                <FaFacebookF  />
                            </a>
                            <a href="" className="footer-link">
                                <FaTwitter  />
                            </a>
                            <a href="" className="footer-link">
                                <FaLinkedinIn  />
                            </a>
                            <a href="" className="footer-link">
                                <FaInstagram  />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
