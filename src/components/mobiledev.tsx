import React from "react";
import ReactPlayer from 'react-player'

import "../scss/mobiledev.scss";
import video from "../assets/MobileDemo.mp4"

const MobileDev = () => {
  return (
    <div className="container-fluid mobiledev">
        <br/>
        <h1>Mobile Development Projects</h1>
        <br/>
        <h2>Platinum Lifestyle Academy<br/> Fittness Application</h2>
        <br/>
        <div className="row mobileContent">
            <div className="col-lg-3 mobileImg"></div>
            <div className="col-lg-6 mobileVideo">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url= {video}
                        height='100%'
                        width='100%'
                        controls = {true}
                    />
                </div>
            </div>
            <div className="col-lg-3 mobileImg"></div>
        </div>
    </div>
  );
}

export default MobileDev;