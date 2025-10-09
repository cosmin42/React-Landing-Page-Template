import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.linkedin : "/"}
                      aria-label="LinkedIn"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.bluesky : "/"}
                      aria-label="Bluesky"
                      title="Bluesky"
                    >
                      <span className="bluesky-icon" aria-hidden="true">
                        {/* Bluesky butterfly-like logo (simplified) */}
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 256 256"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M128 146.6c15.9 31.2 44.8 63.2 73 79.8 9.4 5.5 21.2 2 26.6-7.4 4.8-8.3 7.3-22 1.1-41.1-2.5-7.7-6.9-16.1-13.4-25.5-11.4-16.3-26.5-31.8-42.2-43.5 17.6-13.7 35.3-33.5 45.9-51.4 6-10.1 9.5-19.1 10.9-26.9 1.9-10.7-.7-19.2-6.7-24.1-6.1-4.9-15.4-5.5-25.5-1.3-8.2 3.4-17.2 9.6-26.8 18.8-13.6 13-27.3 30.9-37.9 48.5-10.6-17.6-24.3-35.6-37.9-48.5-9.6-9.2-18.6-15.4-26.8-18.8-10.1-4.2-19.4-3.6-25.5 1.3-6 4.9-8.6 13.4-6.7 24.1 1.4 7.8 4.9 16.8 10.9 26.9 10.6 17.9 28.3 37.7 45.9 51.4-15.7 11.7-30.8 27.2-42.2 43.5-6.5 9.4-10.9 17.8-13.4 25.5-6.2 19.1-3.7 32.8 1.1 41.1 5.4 9.4 17.2 12.9 26.6 7.4 28.2-16.6 57.1-48.6 73-79.8Z"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
