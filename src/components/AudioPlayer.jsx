import React, { useState, useRef, useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
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
    console.log('lcikc')
    const player = document.getElementById("music");
    if (isPlaying) {
        player.classList.add('paused')
    } else {
        player.classList.remove('paused')
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/audio/soundtrack.m4a" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="now playing" id="music" onClick={toggleAudio} style={{pointer: 'default'}}>
        <span className="bar n1">A</span>
        <span className="bar n2">B</span>
        <span className="bar n3">c</span>
        <span className="bar n4">D</span>
        <span className="bar n5">E</span>
        <span className="bar n6">F</span>
        <span className="bar n7">E</span>
        <span className="bar n8">F</span>
        <span className="bar n9">E</span>
        <span className="bar n10">F</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
