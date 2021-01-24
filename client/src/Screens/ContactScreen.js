import React, {useState} from 'react';
import axios from 'axios';

//Importing external files
import './ContactScreen.css';

function ContactScreen(props) {
  //Local hooks
  const[subject, setSubject] = useState('');
  const[email, setEmail] = useState('');
  const[text, setText] = useState('');

//Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if(subject && email && text) {
      console.log(subject, email, text);
      const contactData = {
        subject,
        email,
        text
      }
      //Send contact to backend
      axios.post('api/email', contactData);
    }
    document.getElementById('contactForm').reset();
  };

  return (
    <main>
      <div className="banner">
        {/* Add banner */}
      </div>
      <div className="contact-box">
          <div className="contact-header">
            <h2>CONTACT</h2>
          </div>
          <div className="contact-body">
            <form id="contactForm"
                  onSubmit={handleSubmit}>
                <div class="contactForm-labels">
                  <label for="subject">Subject:</label>
                  <input type="text" name="subject"
                         id="form-subject"
                         className="form-control"
                         placeholder="Subject"
                         onChange={(e) => setSubject(e.target.value)}
                         required/>
                  <label for="email">Email:</label>
                  <input type="email"
                         name="email"
                         id="form-email"
                         className="form-control"
                         placeholder="Email"
                         onChange={(e) => setEmail(e.target.value)}
                         required/>
                </div>
                <div class="contactForm-message">
                  <label for="text">Message:</label>
                  <textarea name="text"
                            id="form-text"
                            class="form-control"
                            cols="20"
                            rows="5"
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Your message">
                  </textarea>
                </div>
                <button type="submit"
                       className="btn-contact">
                       SUBMIT
                </button>
              </form>
          </div>
        </div>
    </main>
  );
}

export default ContactScreen;