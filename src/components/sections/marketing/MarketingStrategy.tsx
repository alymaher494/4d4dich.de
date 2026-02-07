"use client";

import { BarChart3, Target, LineChart, Smartphone, Globe } from "lucide-react";

export default function MarketingStrategy() {
    return (
        <section className="py-24 px-4 md:px-8 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Datengetriebenes <br />
                        <span className="text-primary">Wachstum.</span>
                    </h2>
                    <ul className="space-y-6">
                        {[
                            { text: "Zielgruppenanalyse", icon: Target },
                            { text: "Echtzeit-Tracking", icon: BarChart3 },
                            { text: "A/B Testing", icon: LineChart },
                            { text: "ROI Maximierung", icon: Smartphone }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-6 text-white p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
                        <Globe className="w-64 h-64 text-slate-800 animate-spin-slow duration-[20s]" strokeWidth={0.5} />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="block text-6xl font-black text-white">360°</span>
                            <span className="text-primary font-bold uppercase tracking-widest">Marketing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
