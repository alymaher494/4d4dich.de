"use client";

import { druckContent } from "@/data/website-text";
import { ShoppingBag } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";

export default function DruckIntro() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                    <ShoppingBag className="w-20 h-20 text-slate-900 mb-6 relative z-10" />
                    <h3 className="text-3xl font-black text-slate-900 mb-4 relative z-10">{druckContent.what_modern_print.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                        Wir drucken Ihre Visionen auf höchstem Niveau. Von der Visitenkarte bis zum Großformatbanner.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary font-bold text-xs uppercase tracking-wider shadow-sm border border-slate-100">
                        <div className="w-4 h-4"><LogoIcon /></div>
                        Qualitäts-Check
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-tight">
                        Nicht nur Tinte <br /> <span className="text-secondary">auf Papier.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {druckContent.what_modern_print.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {druckContent.what_modern_print.expectations.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <div className="w-8 h-8 rounded-full  flex items-center justify-center shrink-0 p-1 shadow-sm overflow-hidden">
                                    <img src="/00.png" alt="icon" className="w-full h-full object-contain" />
                                </div> <span className="text-slate-700 font-bold">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
