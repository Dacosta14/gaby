import { motion } from "framer-motion"

function OtherWorldScene() {
  return (
    <div className="w-screen h-dvh overflow-hidden relative bg-black">

     {/* FUNDO BLURADO */}
<motion.img
  initial={{
    opacity: 0,
    scale: 1.1,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 2.5,
  }}
  src="/quarto.png"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    blur-2xl
    scale-110
    opacity-40
  "
/>

{/* IMAGEM PRINCIPAL */}
<motion.img
  initial={{
    opacity: 0,
    y: 20,
    scale: 0.98,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 2,
  }}
  src="/quarto.png"
  alt="Other World"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-contain
    z-[2]
  "
/>

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/25
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
            "radial-gradient(circle, transparent 42%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* LUZ AMBIENTE */}
      <motion.div
        animate={{
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          z-[3]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at top right, rgba(168,85,247,0.18), transparent 40%)",
        }}
      />

      {/* TEXTO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 2,
        }}
        className="
          absolute
          top-[7%]
          w-full
          text-center
          z-[6]
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
            drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]
          "
        >
    
        </h1>

        <p
          className="
            mt-3
            text-white/65
            text-[10px]
            sm:text-xs
            md:text-sm
            uppercase
            tracking-[0.35em]
          "
        >

        </p>
      </motion.div>

      {/* GLOW CENTRAL */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
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
          width: window.innerWidth < 768 ? "220px" : "350px",
          height: window.innerWidth < 768 ? "220px" : "350px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(192,132,252,0.28), transparent 70%)",
        }}
      />

      {/* PARTICULAS */}
      {[...Array(14)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            opacity: [0.12, 0.45, 0.12],
          }}
          transition={{
            duration: 3 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-white
            blur-sm
            z-[7]
          "
          style={{
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* FRASE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.2,
          duration: 2,
        }}
        className="
          absolute
          bottom-[7%]
          w-full
          text-center
          z-[8]
          px-8
        "
      >
        <p
          className="
            text-white/55
            text-xs
            sm:text-sm
            md:text-base
            italic
            tracking-wide
            leading-relaxed
          "
        >
           </p>
      </motion.div>
    </div>
  )
}

export default OtherWorldScene