import React from 'react';
import Navigation from '../../Layout/Navigation';
import Footer from '../../Layout/Footer';

function Contact() {
  return (
    <>
      <Navigation />
      <h1 className='contact-nav'>Feel Free to Contact us </h1>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191aaaaaaaab%3A0x424c7d0a60df9091!2sPashupatinath%20Temple!5e0!3m2!1sen!2snp!4v1706275313061!5m2!1sen!2snp"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form className='contact-form' action="https://formspree.io/f/xbjndzal" method='POST'>
        <input type="text" placeholder='Username' name='username' required autoComplete='off'  />
        <input type="email" placeholder='email' name='email' autoComplete='off' required  />
        <textarea name='messages' placeholder="enter your message" required autoComplete='off' cols="30" rows="10"></textarea>
        <input type="submit" value='send' />

      </form>
      <Footer/>
    </>
  );
}

export default Contact;
