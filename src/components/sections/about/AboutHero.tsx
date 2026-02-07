"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { fadeInUp, fadeInRight } from "@/lib/animations";

export default function AboutHero() {
    return (
        <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden">
            <AmbientBackground />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    {...fadeInUp}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-widest">
                        Über Uns
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                        4D Für Dich ist <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            mehr als eine Agentur.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Wir sind Ihr Partner für ganzheitliche Lösungen. Von der ersten Idee bis zum fertigen Produkt – Design, Druck und digitales Marketing aus einer Hand.
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInRight}
                    className="relative h-[500px] w-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[40px] rotate-3 transform" />
                    <div className="absolute inset-0 bg-white rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                            alt="Team at work"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
