import React from "react";
import "../scss/home.scss";


const Home = () => {
  return (
    <div className="container-fluid home">
        <div className="row homeRow">
            <div className="col-md-6"></div>
            <div className="col-md-6 head">
                <h1 className="headerWelcome">Anthony Taylor's
                <br></br> 
                    University Portfolio
                </h1>
            </div>
        </div>
    </div>
  );
}

export default Home;