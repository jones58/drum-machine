import { useState } from "react";

const sounds = [
  {
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [currentSound, setCurrentSound] = useState("");

  const handlePlay = (id: string, key: string) => {
    setCurrentSound(id);
    const audioElement = document.getElementById(
      key
    ) as HTMLAudioElement;
    audioElement.play();
  };

  return (
    <div id="drum-machine">
      <div id="display">{currentSound || "Play a sound!"}</div>
      <div className="pads-container">
        {sounds.map((sound) => (
          <button
            key={sound.key}
            id={sound.id}
            className="drum-pad"
            onClick={() => handlePlay(sound.id, sound.key)}
          >
            {sound.key}
            <audio
              className="clip"
              id={sound.key}
              src={sound.url}
            ></audio>
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
