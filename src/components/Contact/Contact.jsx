import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oi0y69p",
        "template_jlptrno",
        form.current,
        "user_srO7b3Harhxzqldgwf5Xl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="contact">
          <div className="row">
            <div className="col-lg-6 leftContact">
              <h2>CONTACT</h2>
              <p>
                <strong>Phone:</strong> 0451129979
              </p>
              <p>
                <strong>Email:</strong> rtran.nvtt@gmail.com
              </p>
              <p>
                <strong>LinkedIn:</strong> linkedin.com/in/robert-tran-a49b251a4
              </p>
            </div>
            <div className="col-lg-6 rightContact">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row emailName">
                  <div className="col-lg-6 nameBox">
                    <input className="boxWidth" type="text" name="user_name" placeholder="Name" required/>
                  </div>
                  <div className="col-lg-6">
                    <input className="boxWidth" type="email" name="user_email" placeholder="Email" required/>
                  </div>
                </div>
                <div className="subjectBox">
                  <input
                    className="boxWidth subjectBoxHeight"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="boxWidth boxHeight"
                    name="message"
                    placeholder="Message"
                    required
                  />
                  <input className="sendButton" type="submit" value="Send" />
                  <div>
                    {result ? (
                      <p>Your message has been succesfully sent.</p>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Contact;
