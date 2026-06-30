import { useRef, useState } from "react";
import lostark from "../music/lostark.mp3";
import relaxingTropical from "../music/weding_mp3.mp3";
import calmSpring from "../music/weding_mp3_bong.mp3";

const musicList = [lostark,relaxingTropical,calmSpring];

function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");


  // 페이지가 열릴 때 3개 중 1개 랜덤 선택
  const [selectedMusic] = useState(()=>{
    const randomIndex = Math.floor(Math.random() * musicList.length);
    return musicList[randomIndex];
  });
  
  // ai작성
  const toggleMusic = async () => {
    audioRef.current.volume = 0.3;
    const audio = audioRef.current;

    if (!audio) {
      setStatusMessage("음악을 준비하지 못했습니다.");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setStatusMessage("");
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setStatusMessage("");
    } catch {
      setIsPlaying(false);
      setStatusMessage("음원 파일을 재생할 수 없습니다.");
    }
  };

  const handleAudioError = () => {
    setIsPlaying(false);
    setStatusMessage("음원 파일을 찾을 수 없습니다.");
  };

  return (
    <div className="music-control">
      <button type="button" className="music-button" onClick={toggleMusic}>
        {isPlaying ? "MUSIC ON" : "MUSI OFF"}
      </button>
      <audio ref={audioRef} src={selectedMusic} loop onError={handleAudioError}>
        <track kind="captions" />
      </audio>
      {statusMessage && <span>{statusMessage}</span>}
    </div>
  );
}

export default MusicButton;
