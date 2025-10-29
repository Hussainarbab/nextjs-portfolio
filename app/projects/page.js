"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "To-Do App",
    desc: "A simple and elegant To-Do app built with React and LocalStorage.",
  },
  {
    title: "Weather App",
    desc: "A sleek React weather app powered by live OpenWeather API data.",
  },
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built using Next.js and Tailwind CSS.",
  },
  {
    title: "E-Commerce UI",
    desc: "A responsive shopping interface designed with React and Tailwind.",
  },
  {
    title: "Travel Guide App",
    desc: "A Next.js app showcasing destinations with dynamic routing.",
  },
  {
    title: "AI Image Generator",
    desc: "A creative AI-based image generation tool built with API integration.",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-4 text-white"
      >
        My Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
      >
        Here are some of my favorite projects — blending creativity, logic, and
        performance. Each one reflects my passion for building seamless digital
        experiences.
      </motion.p>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              {p.title}
            </h2>
            <p className="text-gray-600">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
