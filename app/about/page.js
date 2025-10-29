import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Left side — Text */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
          About Me
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          I am <span className="font-semibold">Hussain Abbas</span>, a frontend developer from 
          <span className="text-blue-600"> Gilgit-Baltistan</span>. 
          I love designing user interfaces and writing clean, efficient code.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          I have expertise in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, and <b>Next.js</b>. 
          My goal is to create beautiful and fast web applications that deliver a seamless user experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="/files/Hussain-Abbas-CV.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow"
          >
            Download CV
          </a>

          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium shadow"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right side — Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/hussain.png"
          alt="Hussain Abbas"
          width={280}
          height={200}
          priority
          className="rounded-2xl shadow-lg object-cover border-4 border-blue-600 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
