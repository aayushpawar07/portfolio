import React, { useState } from 'react';
import './Contact.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className='contact section'>
      <h2 className='section__title'>Contact Me</h2>
      <span className='section__subtitle'>I'd love to hear from you</span>

      <div className='contact__container container'>
        <form onSubmit={handleSubmit} className='contact__form'>
          <div className='contact__form-div'>
            <label className='contact__form-tag'>Name</label>
            <input
              type='text'
              name='name'
              className='contact__form-input'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='contact__form-div'>
            <label className='contact__form-tag'>Email</label>
            <input
              type='email'
              name='email'
              className='contact__form-input'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='contact__form-div contact__form-area'>
            <label className='contact__form-tag'>Message</label>
            <textarea
              name='message'
              className='contact__form-input'
              placeholder='Write your message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className='contact__button'>
            Send Message
          </button>
        </form>

        <div className="contact__info">
          <h3 className="contact__info-title">Get in Touch</h3>
          <ul className="contact__info-list">
            <li><i className="uil uil-envelope"></i> Email: <a href="mailto:randomemail@example.com">randomemail@example.com</a></li>
            <li><i className="uil uil-instagram"></i> Instagram: <a href="https://instagram.com/random_insta">@random_insta</a></li>
            <li><i className="uil uil-twitter"></i> Twitter: <a href="https://twitter.com/random_twitter">@random_twitter</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
