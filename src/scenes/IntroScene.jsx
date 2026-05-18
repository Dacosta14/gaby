import { motion } from "framer-motion"
import { useState } from "react"

function IntroScene({ setScene }) {
  const [opened, setOpened] = useState(false)

  function handleDrag(event, info) {
    const x = info.point.x
    const y = info.point.y

    const isMobile = window.innerWidth < 768

    // POSIÇÃO RESPONSIVA DA FECHADURA
    const lockX = isMobile
      ? window.innerWidth * 0.36
      : window.innerWidth * 0.41

    const lockY = isMobile
      ? window.innerHeight * 0.68
      : window.innerHeight * 0.72

    // DISTÂNCIA
    const distance = Math.sqrt(
      (x - lockX) ** 2 +
      (y - lockY) ** 2
    )

    // ABRIR PORTA
    if (distance < 90 && !opened) {
      setOpened(true)

      setTimeout(() => {
        setScene("tunnel")
      }, 1800)
    }
  }

  return (
    <div className="w-screen h-dvh overflow-hidden relative bg-black">

      {/* FUNDO */}
      <motion.img
        animate={{
          scale: opened ? 1.08 : 1,
          filter: opened
            ? "brightness(0.55)"
            : "brightness(0.88)",
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        src="/house.jpg"
        alt="Casa"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          select-none
        "
        draggable={false}
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/35
          z-[1]
        "
      />

      {/* VINHETA */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* TEXTO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: opened ? 0 : 1,
          y: opened ? -20 : 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="
          absolute
          top-[7%]
          w-full
          text-center
          z-[4]
          px-6
        "
      >
        <h1
          className="
            text-white
            text-2xl
            sm:text-3xl
            md:text-5xl
            lg:text-6xl
            font-light
            tracking-[0.25em]
            drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]
          "
        >
          
        </h1>

        <p
          className="
            mt-3
            text-white/70
            text-[10px]
            sm:text-xs
            md:text-sm
            uppercase
            tracking-[0.35em]
          "
        >
         
        </p>
      </motion.div>

      {/* GLOW DA PORTA */}
      <motion.div
        animate={{
          opacity: opened ? 1 : 0,
          scale: opened ? 1.6 : 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          absolute
          z-[3]
          rounded-full
          pointer-events-none
        "
        style={{
          top: window.innerWidth < 768 ? "68%" : "72%",
          left: window.innerWidth < 768 ? "36%" : "41%",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth < 768 ? "120px" : "180px",
          height: window.innerWidth < 768 ? "120px" : "180px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
        }}
      />

      {/* CHAVE */}
      {!opened && (
        <motion.img
          drag
          dragMomentum={false}
          whileDrag={{
            scale: 1.08,
          }}
          onDrag={handleDrag}
          src="/key.png"
          alt="Chave"
          className="
            absolute
            bottom-[7%]
            left-[6%]
            w-[70px]
            sm:w-[85px]
            md:w-[120px]
            z-[5]
            cursor-grab
            active:cursor-grabbing
            drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
            select-none
            touch-none
          "
          draggable={false}
        />
      )}

      {/* FADE */}
      <motion.div
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="
          absolute
          inset-0
          bg-black
          z-[10]
          pointer-events-none
        "
      />
    </div>
  )
}

export default IntroScene