import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    ).then(() => {
      alert("Message sent!");
      form.current.reset();
    }).catch((error) => {
      alert("Failed to send message: " + error.text);
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p>Email: <a href="mailto:21nandini.gupta22@gmail.com">21nandini.gupta22@gmail.com</a></p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/nandini-gupta-63b45b223/" target="_blank" rel="noreferrer">
          nandini-gupta-63b45b223
        </a>
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
