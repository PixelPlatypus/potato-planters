import React, { useState, useRef, useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/audio/soundtrack.m4a" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="play-pause btn" onClick={toggleAudio}>
        {isPlaying ? <AiOutlinePauseCircle /> : <BsFillPlayCircleFill />}
      </button>
    </div>
  );
};

export default AudioPlayer;
