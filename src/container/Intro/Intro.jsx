/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVedio, setPlayVedio] = useState(false);
  const vidRef = useRef(null);
  const handleVideo = () => {
    setPlayVedio((prevState) => !prevState);

    if (playVedio) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        controls={false}
        loop
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVedio ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
