import "../styles/Contact.css";
import { useState } from 'react';
import Button from "./Button";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [questions, setQuestions] = useState("");
  const [others, setOthers] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    if (!e.target.value || e.target.value !== email) {
      setConfirmEmailError("Email addresses do not match.");
    } else {
      setConfirmEmailError("");
    }
  };



  
  const handleQuestionsChange = (e) => {
    const selectedQuestions = e.target.value;
    setQuestions(selectedQuestions);
    if (selectedQuestions === "other") {
      setOthers("");
    } else {
      setOthers(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError("Please enter your name.");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    }

    if (!confirmEmail || confirmEmail !== email) {
      setConfirmEmailError("Email addresses do not match.");
      isValid = false;
    }

    if (isValid) {
      setSubmitMessage("Thank you for interesting!");
    }
  };

    

  return (
    <>
      <h2 className="form-title">Contact Me</h2>
      <form className="form" onSubmit={handleSubmit}  >
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" 
        placeholder="Your Full Name (required)"
        className="name-input form-input"
            value={name}
            onChange={handleNameChange}
         />
         {nameError && (
            <span className="register-message name-error">{nameError}</span>
          )}
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="text"
            id="email"
            name="email"
            placeholder="Your Email (required)"
            className="email-input form-input"
            value={email}
            onChange={handleEmailChange} />

            {emailError && (
            <span className="register-message email-error">{emailError}</span>
          )}
        </div>
        <div >
          <label htmlFor="confirm-email">Confirm Email:</label>
          <input
            type="text"
            id="confirm-email"
            name="confirm-email"
            placeholder="Enter email again (required)"
            className="confirm-email-input form-input"
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
          />
          {confirmEmailError && (
            <span className="register-message confirm-email-error">
              {confirmEmailError}
            </span>
          )}
        </div>
        <div>
        <label htmlFor="message">Message:</label>
        <textarea className="textarea" id="message" name="message" />
        </div>
        <div>
        <label htmlFor="questions"> Questions:</label>
        <select id="questions" name="questions" className="form-select" tabIndex="0" onChange={handleQuestionsChange}>
          <option disabled Value="" >Please select </option>
          <option value="schedule">Schedule</option>
          <option value="pricing">Pricing</option>
          <option value="other">Other </option>
        </select>
        {questions === "other" && (
          <div>
            <label htmlFor="other-questions">Others:</label>
            <input
              type="text"
              id="other-questions"
              name="other-questions"
              placeholder="Please specify"
              className="other-referral-input form-input"
              value={others}
              onChange={(e) => setOthers(e.target.value)}
            />
          </div>
        )}

        </div>
        <Button type="submit" className="button" visual="button">
          Submit
        </Button>
      </form>
      {submitMessage && (
          <p className="confirm-text">{submitMessage}</p>
        )}
      

    </>
  )
}

export default Contact;