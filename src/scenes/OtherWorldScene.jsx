import { motion } from "framer-motion"
import { useState } from "react"

function OtherWorldScene() {

  const [showBinary, setShowBinary] = useState(false)

  return (
    <div className="w-screen h-dvh overflow-hidden relative bg-black">

      {/* FUNDO BLURADO */}
      <motion.img
        initial={{
          opacity: 0,
          scale: 1.15,
        }}
        animate={{
          opacity: 0.45,
          scale: 1,
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
        src="/quarto.png"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          blur-3xl
          scale-110
        "
        draggable={false}
      />

      {/* IMAGEM PRINCIPAL */}
      <motion.img
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 2.4,
          ease: "easeOut",
        }}
        src="/quarto.png"
        alt="Other World"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-contain
          z-[3]
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

      {/* LUZ ROXA */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          z-[4]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at top right, rgba(168,85,247,0.22), transparent 45%)",
        }}
      />

      {/* VINHETA */}
      <div
        className="
          absolute
          inset-0
          z-[5]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, transparent 42%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* PARTÍCULAS */}
      {[...Array(22)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -35, 0],
            opacity: [0.05, 0.4, 0.05],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + index * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-white
            blur-sm
            z-[6]
          "
          style={{
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* BINÁRIO ESCONDIDO */}
      <motion.button
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 0.16,
          x: 0,
        }}
        transition={{
          delay: 3,
          duration: 4,
          ease: "easeOut",
        }}
        onClick={() => setShowBinary(true)}
        className="
          absolute
          right-[2%]
          bottom-[8%]
          z-[9]
          border-none
          bg-transparent
          cursor-pointer
          select-none
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            blur-xl
            opacity-40
          "
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          }}
        />

        {/* TEXTO */}
        <motion.p
          animate={{
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            text-white
            text-[6px]
            sm:text-[7px]
            md:text-[8px]
            font-extralight
            leading-[1.8]
            tracking-[0.25em]
            break-all
            max-h-[65vh]
          "
          style={{
            writingMode: "vertical-rl",
            textShadow: "0 0 12px rgba(255,255,255,0.18)",
          }}
        >
          01110100 01110101 01100100...
        </motion.p>
      </motion.button>

      {/* MODAL BINÁRIO */}
      {showBinary && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="
              bg-[#111]
              border
              border-white/10
              rounded-3xl
              p-6
              max-w-[700px]
              w-full
              shadow-2xl
            "
          >
            <h2
              className="
                text-white
                text-xl
                mb-6
                tracking-[0.3em]
                uppercase
                font-extralight
              "
            >
      
            </h2>

            <p
              className="
                text-white/75
                text-xs
                sm:text-sm
                leading-loose
                break-all
                font-mono
              "
            >
             01000110 01101001 01111010 00100000 01101101 01100101 01110101 00100000 01101101 01100101 01101100 01101000 01101111
              01110010 00100000 01110000 01110010 01100001 00100000 01101100 01100101 01101101 01100010 01110010 01100001 01110010 
              00100000 01100100 01100101 00100000 01110100 01110101 01100100 01101111 00100000 01110001 00100000 01110110 01101111
             01100011 01100101 00100000 01100111 01101111 01110011 01110100 01100001 00101100 00100000 01100110 01100001 01101100 
             01110100 01101111 01110101 00100000 01100001 00100000 01100001 00100000 01110010 01110101 01100010 01111001 00100000 
             01101110 01100001 00100000 01101001 01101101 01100001 01100111 01100101 01101101 00100000 01101101 01100001 01110011
              00100000 01100101 01110101 00100000 01100001 01110010 01110010 01110101 01101101 01101111 00100000 01100100 01100001
               01110001 01110101 01101001 00100000 01100001 00100000 01110000 01101111 01110101 01100011 01101111 
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "01110100 01110101 01100100 01101111 00100000 01110000 01100101 01101110 01110011 01100001 01100100 01101111 00100000 01100101 01101101 00100000 01110110 01100011 00100000 01100111 01100001 01100010 01111001 01111010 01101001 01101110 01101000 01100001"
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
                "
              >
                fechar
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}

      {/* GLOW CENTRAL */}
      <motion.div
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          z-[4]
          rounded-full
          blur-3xl
          pointer-events-none
        "
        style={{
          width: window.innerWidth < 768 ? "240px" : "420px",
          height: window.innerWidth < 768 ? "240px" : "420px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(192,132,252,0.3), transparent 70%)",
        }}
      />

      {/* FADE */}
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{
          duration: 2.5,
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

export default OtherWorldScene