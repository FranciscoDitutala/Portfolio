"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 px-8 flex justify-between items-center sticky top-0 bg-purple-500  backdrop-blur-md z-50"
    >
      <h1 className="font-bold text-lg  text-stone-100">Portfolio</h1>
      <nav className="flex gap-6 text-sm text-gray-700">
        <Link className="text-gray-100" href="#experience">Experiência</Link>
        <Link className="text-gray-100" href="#projects">Projetos</Link>
        <Link className="text-gray-100" href="#education">Educação</Link>
        <Link className="text-gray-100" href="#contacts">Contactos</Link>
        <a href="/CV.pdf" className="border px-3 py-1 rounded-md hover:bg-black hover:text-white text-gray-100"  >
          Download CV
        </a>
      </nav>
    </motion.header>
  );
}
