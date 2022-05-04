
import './Contact.css';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_q8z2xuh",
          "template_uxhf5jj",
          form.current,
          "TqqNAJXFnTxOXYQ91"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.alert("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
        <form ref={form} onSubmit={sendEmail}>
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Let's keep in touch!</h1> 
                            <br/>
                            <p className="hire__text white">Maybe I'm not exactly what you're looking for right now and that's fine! But with a little patience and a good mentorship I will become a much better professional than what you were looking for, I can really assure you that! In this way, we can have a long, lasting and prosperous partnership!</p>
                           <p className="hire__text white"><strong>(+55) 69-9-9386-9329(Telegram & Whatsapp) 
                             </strong> or email <strong>amoedovicc@gmail.com</strong></p>
                             <br/>
                            <p className="feedback">Maybe you can give me some feedback, let me know what you liked, what you didn't like. Help me improve!</p> 
                        </div>
                        
                        <div className="input__box" >
                           <input type="text" name="user_name" id="user_name" className="contact name" placeholder="Your name *" />
                           <input type="email" name="user_email" id="user_email" className="contact email" placeholder="Your Email *" />
                           <input type="text" name="contact_sub" id="contact_sub" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit" value="Send">Submit</button>
                        </div>
                       
                    </div>
                    
                </div>
                
                <div className="col__2">
                    <img src={"https://i.ibb.co/PrzYjXG/selfmademan.png" } alt="" className="contact__img" />
                </div>
            </div>
        </div>
      </form>
    )
}

export default Contact
