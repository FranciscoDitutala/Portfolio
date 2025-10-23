"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteMeta } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <p className="uppercase text-gray-500 text-sm">Disponível para trabalho</p>
        <h1 className="text-5xl font-extrabold mt-4">{siteMeta.name}</h1>
        <p className="uppercase text-gray-500 text-sm">{siteMeta.title}</p>
        <p className="text-lg text-gray-700 mt-4 max-w-xl">{siteMeta.description}</p>
        <div className="mt-8 flex gap-4">
          <a href="/CV.pdf" className="bg-black text-white px-6 py-3 rounded-md">Download CV</a>
          <a href={`mailto:${siteMeta.email}`} className="border border-black px-6 py-3 rounded-md">Contactar</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="w-48 h-48  overflow-hidden shadow-xl"
      >
        <Image src="/profile.jpg" alt="Foto de perfil" width={300} height={300} />
      </motion.div>
    </section>
  );
}
