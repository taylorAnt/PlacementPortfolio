import React from "react";

import "../scss/contact.scss";

const Contact = () => {
  return (
    <div className="container-fluid contact">
        <div className="row contactrow">
          <div className="col-lg-12 contactWrapper">
            <div className="form">
              <h2>Contact Form:</h2>
              <p>Please fill in your information and I will get back to you as soon as possible</p>
              <br/>
              <label className="labelForm">Your Name: </label>
              <input className="firstName" type="text" name="name" value={"First Name"}/>
              <input className="lastName" type="text" name="lastName" value={"Last Name"}/><br/>
              <br/>
              <label className="labelForm">Your Email: </label>
              <input className="email" type="text" name="name" value={"e.g. helloworld@gmail.com.au"}/><br/>
              <br/>
              <label className="labelForm">Your Phone: </label>
              <input className="phone" type="text" name="name" value={"e.g. 0412028468"}/><br/>
              <br/>
              <label className="labelForm">Message: </label><br/>
              <textarea name="message" rows={6} cols={52}></textarea>
              <hr/>
              <br/>
              <button className="submitBtn">Submit Form</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;