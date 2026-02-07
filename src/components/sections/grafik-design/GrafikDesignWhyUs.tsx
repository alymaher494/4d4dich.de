"use client";

import { grafikDesignContent } from "@/data/website-text";
import { Sparkles, Layers, MousePointer2 } from "lucide-react";

export default function GrafikDesignWhyUs() {
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />

                <div className="relative z-10 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{grafikDesignContent.why_us.title}</h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {grafikDesignContent.why_us.reasons.map((reason, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center space-y-4 group hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform shadow-lg shadow-white/5">
                                {idx === 0 ? <Sparkles className="w-8 h-8" /> : idx === 1 ? <Layers className="w-8 h-8" /> : <MousePointer2 className="w-8 h-8" />}
                            </div>
                            <h3 className="text-xl font-bold text-white">{reason}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
