import { motion } from "framer-motion"
import { useState } from "react"

function IntroScene({ setScene, startMusic }) {

  const [opened, setOpened] = useState(false)
  const [showBinary, setShowBinary] = useState(false)

  function handleDrag(event, info) {

    const x = info.point.x
    const y = info.point.y

    const isMobile = window.innerWidth < 768

    // POSIÇÃO DA FECHADURA
    const lockX = isMobile
      ? window.innerWidth * 0.37
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
    if (distance < 85 && !opened) {

      setOpened(true)

      setTimeout(() => {
        setScene("tunnel")
      }, 2200)
    }
  }

  return (
    <div className="w-screen h-dvh overflow-hidden relative bg-black">

      {/* FUNDO */}
      <motion.img
        initial={{
          scale: 1.04,
          opacity: 0,
        }}
        animate={{
          scale: opened ? 1.1 : 1,
          opacity: 1,
          filter: opened
            ? "brightness(0.45)"
            : "brightness(0.82)",
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
        src="/house.jpg"
        alt="Casa Coraline"
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

      {/* LUZ AZUL */}
      <motion.div
        animate={{
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          z-[1]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at top, rgba(96,165,250,0.12), transparent 45%)",
        }}
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/50
          z-[2]
        "
      />

      {/* VINHETA */}
      <div
        className="
          absolute
          inset-0
          z-[3]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, transparent 38%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* PARTÍCULAS */}
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            opacity: [0.02, 0.08, 0.02],
          }}
          transition={{
            duration: 5 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-white
            blur-[1px]
            z-[4]
          "
          style={{
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* BRILHO DA PORTA */}
      <motion.div
        animate={{
          opacity: opened ? [0, 1, 0.4] : 0,
          scale: opened ? [1, 2, 1.5] : 1,
        }}
        transition={{
          duration: 2,
        }}
        className="
          absolute
          z-[5]
          rounded-full
          pointer-events-none
          blur-2xl
        "
        style={{
          top: window.innerWidth < 768 ? "68%" : "72%",
          left: window.innerWidth < 768 ? "37%" : "41%",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth < 768 ? "180px" : "260px",
          height: window.innerWidth < 768 ? "180px" : "260px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(96,165,250,0.25) 30%, transparent 70%)",
        }}
      />

      {/* CHAVE */}
      {!opened && (
        <motion.img
          drag
          dragMomentum={false}
          whileDrag={{
            scale: 1.08,
            rotate: 4,
          }}
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          onDrag={(event, info) => {

  startMusic()

  handleDrag(event, info)
}}
          src="/key.png"
          alt="Chave"
          className="
            absolute
            bottom-[6%]
            left-[5%]
            w-[72px]
            sm:w-[90px]
            md:w-[110px]
            z-[6]
            cursor-grab
            active:cursor-grabbing
            drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
            select-none
            touch-none
          "
          draggable={false}
        />
      )}

      {/* BINÁRIO ESCONDIDO */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: opened ? 0 : 0.08,
        }}
        transition={{
          delay: 4,
          duration: 4,
        }}
        onClick={() => setShowBinary(true)}
        className="
          absolute
          right-[2%]
          bottom-[2%]
          z-[7]
          cursor-pointer
          select-none
        "
      >
        <p
          className="
            text-white
            text-[7px]
            sm:text-[8px]
            tracking-[0.25em]
            font-light
            leading-relaxed
            max-w-[140px]
            break-all
            hover:opacity-40
            transition-opacity
          "
        >
          01010000 01100001 01100111...
        </p>
      </motion.div>

      {/* MODAL */}
      {showBinary && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="
            absolute
            inset-0
            bg-black/80
            backdrop-blur-md
            z-[30]
            flex
            items-center
            justify-center
            px-6
          "
        >
          <motion.div
            initial={{
              scale: 0.96,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="
              bg-black/70
              backdrop-blur-2xl
              border
              border-white/5
              rounded-[32px]
              p-6
              max-w-[700px]
              w-full
              shadow-2xl
            "
          >

            <h2
              className="
                text-white
                text-lg
                sm:text-xl
                mb-2
                tracking-[0.3em]
                uppercase
                font-extralight
              "
            >
            </h2>

            <p
              className="
                text-white/35
                text-xs
                mb-6
                tracking-[0.3em]
                uppercase
                font-light
              "
            >
              encontrado escondido no código
            </p>

            <p
              className="
                text-white/70
                text-xs
                sm:text-sm
                leading-loose
                break-all
                font-thin
                tracking-widest
              "
            >
              01010000 01100001 01100111 01101001 01101110 01100001
              00100000 01100011 01110010 01101001 01100001 01110100
              01101001 01110110 01100001 00100000 01110000 01110010
              01100001 00100000 01110000 01100101 01110011 01110011
              01101111 01100001 00100000 01101101 01100001 01101001
              01110011 00100000 01100011 01110010 01101001 01100001
              01110100 01101001 01110110 01100001 00100000 01100101
              00100000 01101100 01100101 01100111 01100001 01101100
              00100000 01110001 01110101 01100101 00100000 01100101
              01110101 00100000 01100011 01101111 01101110 01101000
              01100101 11100111 01101111
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "01010000 01100001 01100111 01101001 01101110 01100001 00100000 01100011 01110010 01101001 01100001 01110100 01101001 01110110 01100001 00100000 01110000 01110010 01100001 00100000 01110000 01100101 01110011 01110011 01101111 01100001 00100000 01101101 01100001 01101001 01110011 00100000 01100011 01110010 01101001 01100001 01110100 01101001 01110110 01100001 00100000 01100101 00100000 01101100 01100101 01100111 01100001 01101100 00100000 01110001 01110101 01100101 00100000 01100101 01110101 00100000 01100011 01101111 01101110 01101000 01100101 11100111 01101111"
                  )
                }}
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-white
                  text-black
                  text-sm
                  font-medium
                  transition-transform
                  hover:scale-[1.03]
                "
              >
                copiar
              </button>

              <button
                onClick={() => setShowBinary(false)}
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/10
                  text-white
                  text-sm
                  hover:bg-white/15
                  transition-colors
                "
              >
                fechar
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}

      {/* FADE */}
      <motion.div
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{
          duration: 1.8,
          delay: 0.6,
        }}
        className="
          absolute
          inset-0
          bg-black
          z-[20]
          pointer-events-none
        "
      />
    </div>
  )
}

export default IntroScene