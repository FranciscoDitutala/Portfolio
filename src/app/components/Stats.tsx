"use client";
import { motion } from "framer-motion";
import { stats } from "../../data/portfolio";

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-50 py-10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-green-500">{s.value}</div>
            <div className="text-gray-600 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
