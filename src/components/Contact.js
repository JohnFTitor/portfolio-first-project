import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('formData');
    if (localData) {
      const formData = JSON.parse(localData);
      setName(formData.name);
      setEmail(formData.email);
      setMessage(formData.message);
    }
  }, []);

  const errorMessage = document.querySelector('.error');
  const emailNode = document.querySelector('#email');

  const showError = (msg) => {
    errorMessage.textContent = msg;
    errorMessage.classList.add('active');
    emailNode.classList.add('error-icon');
  };

  const checkemail = () => {
    if (email === '') {
      showError('Email should not be blank');
      return false;
    }

    const lowerCaseRegex = /[A-Z]/g;
    if (email.match(lowerCaseRegex)) {
      showError(`Email field doesn't allow capital letters. It should be ${email.toLowerCase()}`);
      return false;
    }

    return true;
  };

  const populateStorage = () => {
    const formData = {
      name,
      email,
      message,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const onChangeHandler = (event) => {
    const input = event.target.name;
    switch (input) {
      case 'userName':
        setName(event.target.value.trim());
        populateStorage();
        break;
      case 'userEmail':
        setEmail(event.target.value.trim());

        errorMessage.textContent = '';
        errorMessage.classList.remove('active');
        emailNode.classList.remove('error-icon');

        populateStorage();
        break;
      case 'comment':
        setMessage(event.target.value.trim());
        populateStorage();
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (checkemail()) {
      emailNode.submit();
      setName('');
      setEmail('');
      setMessage('');
      populateStorage();
    }
  };

  return (
    <section id="contact" className="container">
      <div className="content contact contact-parent">
        <p>
          {'I\'m always interested in hearing about new projects, so if you\'d like to chat please get in touch.'}
        </p>
        <form
          className="contact"
          action="https://formspree.io/f/xqknzgnq"
          method="post"
          onSubmit={onSubmitHandler}
        >
          <label htmlFor="name">
            <input
              name="userName"
              type="text"
              id="name"
              placeholder="Full name"
              maxLength="30"
              required
              onChange={onChangeHandler}
              value={name}
            />
          </label>
          <label htmlFor="email">
            <input
              name="userEmail"
              type="email"
              id="email"
              placeholder="Email address"
              onChange={onChangeHandler}
              value={email}
            />
          </label>
          <label htmlFor="message">
            <textarea
              name="comment"
              id="message"
              maxLength="500"
              placeholder="Enter text here"
              onChange={onChangeHandler}
              value={message}
              required
            />
          </label>
          <button type="submit" className="interaction">Get in touch</button>
          <span className="error" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
