"use client";

import { Check, X } from "lucide-react";

export default function AboutDifference() {
    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Warum 4D?</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">Der 4D Unterschied</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Others */}
                    <div className="bg-slate-50 p-10 rounded-3xl opacity-70 hover:opacity-100 transition-opacity">
                        <h3 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3">
                            <X className="w-6 h-6" /> Andere Agenturen
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4 text-slate-500">
                                <X className="w-6 h-6 shrink-0 text-red-300" />
                                <span>"Full-Service" durch billiges Outsourcing</span>
                            </li>
                            <li className="flex gap-4 text-slate-500">
                                <X className="w-6 h-6 shrink-0 text-red-300" />
                                <span>Lange Vertragsbindungen ohne Flexibilität</span>
                            </li>
                            <li className="flex gap-4 text-slate-500">
                                <X className="w-6 h-6 shrink-0 text-red-300" />
                                <span>Intransparente Preisgestaltung</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4D */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-primary/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />

                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 text-primary">
                            <Check className="w-6 h-6 text-primary" /> 4D Für Dich
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4 text-slate-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span>Echtes Experten-Netzwerk & In-House Qualität</span>
                            </li>
                            <li className="flex gap-4 text-slate-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span>Maximale Flexibilität & Skalierbarkeit</span>
                            </li>
                            <li className="flex gap-4 text-slate-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span>Transparente Preise & Persönliche Beratung</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
