import { useRef, useState } from "react";

function MusicButton({ musicUrl }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      setStatusMessage("음악을 준비하지 못했습니다.");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setStatusMessage("배경음악을 껐습니다.");
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setStatusMessage("배경음악을 켰습니다.");
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
        {isPlaying ? "음악 OFF" : "음악 ON"}
      </button>
      <audio ref={audioRef} src={musicUrl} loop onError={handleAudioError}>
        <track kind="captions" />
      </audio>
      {statusMessage && <span>{statusMessage}</span>}
    </div>
  );
}

export default MusicButton;
