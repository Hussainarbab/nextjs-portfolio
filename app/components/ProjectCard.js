"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 border border-gray-300 rounded-xl bg-white shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}
