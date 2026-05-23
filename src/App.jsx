import { useEffect, useRef, useState } from "react"

import IntroScene from "./scenes/IntroScene"
import TunnelScene from "./scenes/TunnelScene"
import OtherWorldScene from "./scenes/OtherWorldScene"

function App() {

  const [scene, setScene] = useState("intro")

  const audioRef = useRef(null)

  useEffect(() => {

    const audio = new Audio("/music.mp3")

    audio.loop = true
    audio.volume = 0.18

    audioRef.current = audio

    
    const startAudio = () => {

      audio.play()
        .then(() => {
          console.log("tocando")
        })
        .catch((err) => {
          console.log(err)
        })

      
      window.removeEventListener("click", startAudio)
      window.removeEventListener("touchstart", startAudio)
    }

    
    window.addEventListener("click", startAudio)
    window.addEventListener("touchstart", startAudio)

    return () => {
      audio.pause()
    }

  }, [])

  return (
    <>
      {scene === "intro" && (
        <IntroScene setScene={setScene} />
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