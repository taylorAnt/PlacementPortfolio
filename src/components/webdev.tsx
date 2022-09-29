import React from "react";
import ReactPlayer from 'react-player'

import "../scss/webdev.scss";
import faceVideo from "../assets/faceapp.mp4"


const WebDev = () => {
  return (
    <div className="container-fluid webDev">
        <br/>
        <h1>Web Development Projects</h1>
        <br/>
        <h2>Facebook<br/> Football Application</h2>
        <br/>
        <div className="row webrow">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 webVideo">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player face'
                        url= {faceVideo}
                        height='100%'
                        width='100%'
                        volume={0}
                        muted={true}
                        controls = {true}
                    />
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>
  );
}

export default WebDev;