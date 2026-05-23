import { useRef, useState } from "react"

import IntroScene from "./scenes/IntroScene"
import TunnelScene from "./scenes/TunnelScene"
import OtherWorldScene from "./scenes/OtherWorldScene"

function App() {

  const [scene, setScene] = useState("intro")

  const audioRef = useRef(null)

  function startMusic() {

  
    if (audioRef.current) return

    const audio = new Audio("/music.mp3")

    audio.loop = true
    audio.volume = 0.18

    audio.play()

    audioRef.current = audio
  }

  return (
    <>
      {scene === "intro" && (
        <IntroScene
          setScene={setScene}
          startMusic={startMusic}
        />
      )}

      {scene === "tunnel" && (
        <TunnelScene setScene={setScene} />
      )}

      {scene === "otherworld" && (
        <OtherWorldScene />
      )}
    </>
  )
}

export default App