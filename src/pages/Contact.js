import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="title">Let's talk</div>
                <div className="contact-form">
                    <div className="form-group">
                        <div>
                            <label htmlFor="firstname">Firstname<span>*</span></label>
                            <input type="text" className="form-control" id="firstname" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Lastname<span>*</span></label>
                            <input type="text" className="form-control" id="lastname" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="email">Email<span>*</span></label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
