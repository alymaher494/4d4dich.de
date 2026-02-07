"use client";

import { webAppContent } from "@/data/website-text";
import { ShoppingCart, LayoutGrid, Server } from "lucide-react";

export default function WebAppEcommerce() {
    return (
        <section className="py-24 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm uppercase tracking-wider">
                        <ShoppingCart className="w-4 h-4" />
                        E-Commerce Experts
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        {webAppContent.ecommerce.title}
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed font-light">
                        {webAppContent.ecommerce.description}
                    </p>
                    <div className="flex gap-6 pt-4">
                        <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <LayoutGrid className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-bold text-lg">Responsive UI</h4>
                            <p className="text-sm text-slate-400">Perfekt auf jedem Gerät</p>
                        </div>
                        <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Server className="w-8 h-8 text-secondary mb-4" />
                            <h4 className="font-bold text-lg">High Performance</h4>
                            <p className="text-sm text-slate-400">Schnelle Ladezeiten</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary to-secondary p-1">
                        <div className="w-full h-full bg-slate-900 rounded-[2.8rem] flex items-center justify-center">
                            <ShoppingCart className="w-32 h-32 text-white opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
