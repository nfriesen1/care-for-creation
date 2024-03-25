import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if Name, Email, and Message fields are filled out
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setStateMessage("Please fill out all fields.");
      setIsError(true);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsError(false);
          setStateMessage("Message sent successfully! We will try to get back to you as soon as we can.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 10000); // hide message after 10 seconds
        },
        (error) => {
          setIsError(true);
          setStateMessage("Something went wrong, please try again later.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 10000); // hide message after 10 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          id="name-input"
          className="form-control"
          placeholder="Enter full name"
          name="user_name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          className="form-control"
          placeholder="Enter email"
          name="user_email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="message-input">Message</label>
        <textarea className="form-control" id="message-input" name="message" />
      </div>
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && isError && (
        <div className="alert alert-danger" role="alert">
          {stateMessage}
        </div>
      )}
      {stateMessage && !isError && (
        <div className="alert alert-success" role="alert">
          {stateMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
