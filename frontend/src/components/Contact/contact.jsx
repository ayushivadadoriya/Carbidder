import React,{useRef} from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import background from "../images/background.png"
function Contact() {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_a3lwetb', 'template_yx1mf0s', form.current, {
            publicKey:'oH_mJY6yVJBMnlpPM'
    })
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };
    
  return (
    <>
      <div className='contact-container'>
        <img src={background} alt='background' width="100%" height="auto"></img>
        <div className='contact-main-form'>
            <h1>Contact us</h1>
            <form ref={form} className="contact-form" onSubmit={sendEmail} >
                <div><label>Name:</label><input type='text' name='user_name' required/></div>
                <div><label>Email:</label><input type='email' name='user_email' required/></div>
                <div><label>Subject:</label><input type='text' name='subject' required/></div>
                <div><label>Messagee:</label><textarea name='message' cols="30" rows="10"/></div>
                <button type='submit' className='btn'>Send Message</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact
