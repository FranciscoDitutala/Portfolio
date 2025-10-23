"use client";
import { motion } from "framer-motion";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold mb-10">Educação</h2>
      <div className="space-y-6">
        {education.map((exp, i) => (
          <motion.div
            key={exp.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-6 border-4 border-gray-500  rounded-xl hover:shadow-lg transition"
          >
            <div className="flex justify-between ">
              <div>
                <h3 className="font-semibold">{exp.grade}</h3>
                <p className="text-gray-600">{exp.school}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
           
          </motion.div>
        ))}
      </div>
    </section>
  );
}
