"use client";

import { motion } from "framer-motion";
import { druckContent } from "@/data/website-text";
import { Printer } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { fadeInUp } from "@/lib/animations";

export default function DruckHero() {
    return (
        <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden bg-slate-900 text-white">
            <AmbientBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-black/80 -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    {...fadeInUp}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-primary border border-primary text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                        Premium Print
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Druck, der <br />
                        <span className="bg-clip-text text-secondary">
                            beeindruckt.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        {druckContent.page_title}
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="aspect-[4/5] md:aspect-square rounded-[3rem] bg-slate-900 rotate-3 shadow-2xl overflow-hidden relative border-4 border-white">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opactity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
                            <Printer className="w-16 h-16 text-white mb-4" />
                            <h3 className="text-3xl font-bold text-white">Heidelberg Offset</h3>
                            <p className="text-white/60">Professional Print Quality</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
