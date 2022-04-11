import React from "react";
import { useState } from "react";
import "./CSS/stylesContact.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send Message");
  };
  return (
    <div>
      <div id="contact">
        <h3>Contact Us</h3>
      </div>
      <div className="contact">
        <div>
          {" "}
          <p>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="row">
          <div className="column">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <table>
                <caption>Get In Touch</caption>
                <tr>
                  <td>
                    {" "}
                    <input
                      name="name"
                      type="text"
                      value={name}
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      name="email"
                      type="text"
                      value={email}
                      placeholder="Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      name="subject"
                      type="text"
                      value={subject}
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      name="message"
                      type="text"
                      value={message}
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      className="submitButton"
                      type="submit"
                      value="Send Message"
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className="column">
            <form>
              <div>
                <h4>Contact Info</h4>
              </div>
              <div>
                <p>Address :</p>
              </div>
              <div>
                <blockquote>
                  25006 Ukraine m. Kropivnitsky, vul. Tarasa Karpi, 76, 8th over
                </blockquote>
              </div>
              <div>
                <p> Phone :</p>
              </div>
              <div>
                <blockquote>+38 063 385 01 48</blockquote>
              </div>
              <div>
                <p> Email :</p>
              </div>
              <div>
                <blockquote>tiutiuniryna@gmail.com</blockquote>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
