"use client";

import { motion } from "framer-motion";
import { grafikDesignContent } from "@/data/website-text";
import { CheckCircle2, PenTool, Layers, Image as ImageIcon, MousePointer2, Smartphone, Palette, Megaphone, Video } from "lucide-react";

export default function GrafikDesignIntro() {
    return (
        <section className="py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                    <h2 className="text-4xl font-black text-slate-900">
                        Wir bringen Ihre Vision <br />
                        <span className="text-slate-400 text-secondary">auf den Punkt.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {grafikDesignContent.intro}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {grafikDesignContent.services.map((service, idx) => {
                            const Icon = [PenTool, Smartphone, Palette, Megaphone, Video][idx] || CheckCircle2;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all cursor-default flex items-center gap-3"
                                >
                                    <Icon className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-slate-800 font-medium">{service}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
                    <div className="space-y-6 mt-12">
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center gap-4">
                            <PenTool className="w-10 h-10 text-secondary" />
                            <span className="font-bold text-slate-900">Logo Design</span>
                        </div>
                        <div className="bg-primary p-8 rounded-[2rem] shadow-xl shadow-primary/20 flex flex-col items-center text-center gap-4 text-white">
                            <Layers className="w-10 h-10" />
                            <span className="font-bold">Branding</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-secondary p-8 rounded-[2rem] shadow-xl shadow-secondary/20 flex flex-col items-center text-center gap-4 text-white">
                            <ImageIcon className="w-10 h-10" />
                            <span className="font-bold">Social Media</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center gap-4">
                            <MousePointer2 className="w-10 h-10 text-primary" />
                            <span className="font-bold text-slate-900">UI / UX</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
