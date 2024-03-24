import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
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
          setStateMessage("Message sent successfully!  We will try get back to you as soon as we can.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 10000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 10000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <div className="form-group">
        <label for="name-input">Name</label>
        <input
          type="text"
          id="name-input"
          className="form-control"
          placeholder="Enter full name"
          name="user_name"
        />
      </div>
      <div className="form-group">
        <label for="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          className="form-control"
          placeholder="Enter email"
          name="user_email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="message-input">Message</label>
        <textarea className="form-control" id="message-input" name="message" />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && (
          <div class="alert alert-success" role="alert">
            {<p>{stateMessage}</p>}
          </div>
        )}
      </div>
    </form>
  );
};
export default ContactForm;
