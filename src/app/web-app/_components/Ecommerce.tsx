"use client";

import { webAppContent } from "@/data/website-text";
import { ShoppingCart, LayoutGrid, Server } from "lucide-react";

export default function WebAppEcommerce() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 md:px-12 gap-16 lg:gap-24 items-center relative z-10">
                <div className="space-y-10">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm group">
                            <LayoutGrid className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-lg mb-2">Responsive UI</h4>
                            <p className="text-sm text-slate-400">Perfekt optimiert für Mobile & Desktop Shopping.</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm group">
                            <Server className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-lg mb-2">High Performance</h4>
                            <p className="text-sm text-slate-400">Ultraschnelle Ladezeiten für maximale Conversion.</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm group">
                            <ShoppingCart className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-lg mb-2">Smart Checkout</h4>
                            <p className="text-sm text-slate-400">Sichere Zahlungsarten und einfacher Kaufprozess.</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm group">
                            <LayoutGrid className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-lg mb-2">SEO Optimiert</h4>
                            <p className="text-sm text-slate-400">Top-Rankings für Ihre Produkte in Suchmaschinen.</p>
                        </div>
                    </div>
                </div>

                <div className="relative pt-12 lg:pt-0">
                    {/* Abstract Device/Shop Mockup */}
                    <div className="relative z-10 bg-slate-800 rounded-[2.5rem] border border-slate-700 shadow-2xl p-6 md:p-8 rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="h-2 w-24 bg-slate-700 rounded-full" />
                        </div>

                        {/* Shop Content Mock */}
                        <div className="space-y-6">
                            <div className="flex gap-6">
                                <div className="w-1/3 aspect-[3/4] rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 animate-pulse" />
                                <div className="flex-1 space-y-4 py-2">
                                    <div className="h-6 w-3/4 bg-slate-700 rounded-lg" />
                                    <div className="h-4 w-full bg-slate-700/50 rounded-lg" />
                                    <div className="h-4 w-5/6 bg-slate-700/50 rounded-lg" />
                                    <div className="pt-4 flex items-center gap-4">
                                        <div className="h-8 w-24 bg-primary rounded-lg" />
                                        <div className="h-8 w-8 rounded-full bg-slate-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700">
                                    <p className="text-xs text-slate-400 mb-1">Total Sales</p>
                                    <p className="text-xl font-bold text-white">€ 24.5k</p>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700">
                                    <p className="text-xs text-slate-400 mb-1">Conversion</p>
                                    <p className="text-xl font-bold text-emerald-400">+12.5%</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Buy Button */}
                        <div className="absolute -bottom-8 -right-8 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                            <div className="bg-green-100 p-3 rounded-xl text-green-600">
                                <ShoppingCart className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-slate-400">New Order</p>
                                <p className="font-bold text-lg">Just now</p>
                            </div>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full" />
                </div>
            </div>
        </section>
    );
}
