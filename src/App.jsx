import { useState } from "react"
import IntroScene from "./scenes/IntroScene"
import TunnelScene from "./scenes/TunnelScene"
import OtherWorldScene from "./scenes/OtherWorldScene"

function App() {
  const [scene, setScene] = useState("intro")

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