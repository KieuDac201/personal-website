import React from "react";
import '../style/Contact.css';
    import { useForm } from 'react-hook-form';
    import { Animated } from "react-animated-css";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
      console.log(data);
    };

    return (
        
        <div className="contact">
            <div className="container">
            <Animated animationIn="fadeIn"  animationInDuration={1500} isVisible={true} >
                <div className="title">Let's talk</div>
                
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="firstname">Firstname<span>*</span></label>
                            <input type="text" className="form-control" id="firstname" 
                                    placeholder={errors.firstname && 'Please enter first name.'} 
                                    name="firstname" ref={register({ required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname">Lastname<span>*</span></label>
                            <input  type="text" className="form-control" id="lastname" 
                                    placeholder={errors.lastname && 'Please enter last name.'} 
                                    name="lastname" ref={register({ required: true })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="email">Email<span>*</span></label>
                            <input type="email" className="form-control" id="email" name="email"
                                    placeholder={errors.email && 'Please enter email.'}  
                                    ref={register({required: true})}/>
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" 
                                    placeholder={errors.subject && 'Please enter subject.'}  
                                    name="subject" ref={register({required: true})}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className="form-control" name="message" 
                                        placeholder={errors.message && 'Please enter message'}  ref={register({required: true})}>
                            </textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="btn" type="submit" value="SEND"/>
                    </div>
                </form>
                </Animated>
            </div>
            
        </div>
        
    );
};
export default Contact;
