"use client";
import { motion } from "framer-motion";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold mb-10">Experiência</h2>
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="mt-3 text-gray-700">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
