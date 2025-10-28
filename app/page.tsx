"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-3 text-gray-800"
      >
        Hussain Abbas
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-gray-500 mb-6"
      >
        Frontend Developer | React & Next.js Specialist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-lg text-gray-600 mb-8"
      >
        میں ایک جوشیلے فرنٹ اینڈ ڈیولپر ہوں جو جدید ٹیکنالوجیز جیسے React, 
        Next.js, HTML, CSS، اور JavaScript کے ساتھ جدید ویب ایپس تیار کرتا ہے۔
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
