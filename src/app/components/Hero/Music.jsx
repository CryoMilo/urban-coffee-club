"use client";

import { useState, useEffect, useRef } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const Music = () => {
  const [isMusicOff, setMusicOff] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) =>
          console.log("Autoplay blocked by the browser", error),
        );
    }
  }, []);

  const toggleMusic = () => {
    setMusicOff((prev) => {
      const isOff = !prev;
      if (audioRef.current) {
        if (isOff) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      }
      return isOff;
    });
  };

  return (
    <div
      onClick={toggleMusic}
      className="absolute bottom-0 right-0 z-30 cursor-pointer p-4 text-white"
    >
      {isMusicOff ? <MdMusicOff size={24} /> : <MdMusicNote size={24} />}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/hero/jazz.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Music;
