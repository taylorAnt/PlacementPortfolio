import React from "react";
import ReactPlayer from 'react-player'

import "../scss/gamedev.scss";
import gameVideo from "../assets/gameVideo.mp4"


const GamesDev = () => {
  return (
    <div className="container-fluid gamesDev">
        <br/>
        <h1>Games Development Projects</h1>
        <br/>
        <h2>Sigma<br/>First Person Shooter</h2>
        <br/>
        <div className="row gamerow">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 gameVideo">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player game'
                        url= {gameVideo}
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

export default GamesDev;