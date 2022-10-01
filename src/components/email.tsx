import React from "react";
import "../scss/home.scss";

export default class Email extends React.Component {
    render(){
      return (
        <div className="row emailWrapper">
          <div className="email-container">
            <div className="email">anthony.taylor2@griffithuni.edu.au</div>
            <div className="line"></div>
          </div>
        </div>
      );
    }
}