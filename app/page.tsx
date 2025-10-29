"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-[90vh] text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage:
            "url('/images/bg.jpg')", // <-- replace with your actual image path
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl sm:text-7xl font-extrabold mb-4 text-white drop-shadow-lg"
      >
        Hussain Abbas
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl sm:text-3xl text-blue-300 font-semibold mb-6"
      >
        Frontend Developer | React & Next.js Specialist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-2xl text-gray-200 text-lg sm:text-xl mb-8 leading-relaxed px-4"
      >
        I’m a passionate frontend developer who builds modern, responsive, and
        user-friendly web applications using React, Next.js, HTML, CSS, and
        JavaScript.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/projects"
          className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          View My Work
        </Link>
      </motion.div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
