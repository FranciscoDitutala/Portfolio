"use client";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold mb-10">Projetos</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group border rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-60">
              <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{p.excerpt}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
