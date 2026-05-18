import { motion } from "framer-motion"
import { useEffect } from "react"

function TunnelScene({ setScene }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setScene("otherworld")
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">

      {/* TÚNEL */}
      <motion.img
        initial={{
          scale: 1,
          filter: "blur(0px) brightness(0.8)",
        }}
        animate={{
          scale: 1.8,
          filter: "blur(2px) brightness(1)",
        }}
        transition={{
          duration: 3.2,
          ease: "easeIn",
        }}
        src="/tunel.jpg"
        alt="Tunel"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* OVERLAY ESCURO */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: 3,
        }}
        className="
          absolute
          inset-0
          bg-black
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
            "radial-gradient(circle, transparent 35%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* TEXTO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [30, 0, 0, -20],
        }}
        transition={{
          duration: 2.8,
          times: [0, 0.2, 0.8, 1],
        }}
        className="
          absolute
          top-[12%]
          w-full
          text-center
          z-[3]
          px-6
        "
      >
        <h1
          className="
            text-white
            text-2xl
            md:text-4xl
            lg:text-5xl
            font-light
            tracking-[0.35em]
            uppercase
            drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
          "
        >
          
        </h1>
      </motion.div>

      {/* PARTICULAS */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 2],
            y: [0, -200],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          className="
            absolute
            rounded-full
            bg-white
            blur-sm
          "
          style={{
            width: "6px",
            height: "6px",
            left: `${Math.random() * 100}%`,
            bottom: "-10%",
          }}
        />
      ))}

      {/* FADE FINAL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 2.5,
        }}
        className="
          absolute
          inset-0
          bg-black
          z-[10]
        "
      />
    </div>
  )
}

export default TunnelScene