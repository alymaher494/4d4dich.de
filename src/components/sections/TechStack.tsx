"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
    { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
    { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
    { name: "Adobe Creative Cloud", logo: "https://cdn.worldvectorlogo.com/logos/adobe-creative-cloud-2.svg" },
];

export default function TechStack() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Technologie</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">Unser Tech Stack</h2>
                    <p className="text-lg text-slate-600 mt-4">Wir setzen auf moderne, skalierbare Tools für maximale Performance.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {techStack.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center border border-slate-100 group hover:shadow-lg transition-all"
                        >
                            <div className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
