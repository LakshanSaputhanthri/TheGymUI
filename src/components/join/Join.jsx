import React,{ useRef } from 'react'
import './join.css'
import emailjs from "@emailjs/browser"

const Join = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9s8hlrm', 'template_w2bs6y7', form.current, 'uF1Xhi7Vjj9rq7MVU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="join">
      <div className="join--left">
      <hr/>
        <div>
          <span className='stroke--text'>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span >YOUR BODY </span>
          <span className='stroke--text'>WITH US</span>
        </div>
      </div>
      <div className="join--right">
        <form ref={form} action="" className='email--container' onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your Email Address Here'/>
          <button className='btn btn--join'>JOIN NOW</button>
        </form>
      </div>
    </div>
  )
}

export default Join