import { motion } from "framer-motion"
import { useEffect } from "react"

function TunnelScene({ setScene }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      setScene("otherworld")
    }, 2400)

    return () => clearTimeout(timer)

  }, [])

  return (
    <div className="w-screen h-dvh overflow-hidden relative bg-black">

      <motion.img
        initial={{
          scale: 1,
          rotate: 0,
          filter: "brightness(0.7)",
        }}
        animate={{
          scale: 1.35,
          rotate: -1.5,
          filter: "brightness(1)",
        }}
        transition={{
          duration: 2.4,
          ease: [0.76, 0, 0.24, 1],
        }}
        src="/tunel.jpg"
        alt="Tunel"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          will-change-transform
        "
        draggable={false}
      />


      <motion.div
        initial={{
          opacity: 0.45,
        }}
        animate={{
          opacity: 0.68,
        }}
        transition={{
          duration: 2.4,
        }}
        className="
          absolute
          inset-0
          bg-black
          z-[1]
        "
      />


      <motion.div
        initial={{
          opacity: 0.6,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2.4,
        }}
        className="
          absolute
          inset-0
          z-[2]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, transparent 18%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      
      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 2,
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
            "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 45%)",
        }}
      />


      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 1.7,
          ease: "easeInOut",
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

export default TunnelScene