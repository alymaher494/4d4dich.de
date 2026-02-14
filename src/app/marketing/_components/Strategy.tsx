"use client";

import { Target, BarChart3, LineChart, Smartphone } from "lucide-react";

const socialIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TikTok_logo.svg/2560px-TikTok_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Google_Classroom_Logo.svg"
];

export default function MarketingStrategy() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Datengetriebenes <br />
                        <span className="text-secondary">Wachstum.</span>
                    </h2>
                    <ul className="space-y-6">
                        {[
                            { text: "Zielgruppenanalyse", icon: Target },
                            { text: "Echtzeit-Tracking", icon: BarChart3 },
                            { text: "A/B Testing", icon: LineChart },
                            { text: "ROI Maximierung", icon: Smartphone }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-6 text-white p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative flex items-center justify-center">
                    {/* Main Container Circle */}
                    <div className="relative w-[200px] h-[200px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                        {/* Center Logo */}
                        <div className="absolute z-20 bg-transparent   rounded-full p-4 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center shadow-2xl shadow-primary/20">
                            <img
                                src="https://4d4dich.de/wp-content/uploads/2025/01/cropped-cropped-cropped-logo-png-1-e1761347164694.png"
                                alt="4D Logo"
                                className="w-20 md:w-24 h-auto object-contain"
                            />
                        </div>

                        {/* Orbiting Ring */}
                        <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow">
                            {socialIcons.map((icon, index) => {
                                const angle = (index / socialIcons.length) * 360;
                                const radius = 50; // percentage

                                return (
                                    <div
                                        key={index}
                                        className="absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-2.5 md:p-3 shadow-lg flex items-center justify-center top-1/2 left-1/2 -ml-6 -mt-6 md:-ml-8 md:-mt-8"
                                        style={{
                                            transform: `rotate(${angle}deg) translate(clamp(140px, 35vw, 210px)) rotate(-${angle}deg)`
                                        }}
                                    >
                                        <img
                                            src={icon}
                                            alt="Social Icon"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Decorative Inner Ring */}
                        <div className="absolute inset-[25%] rounded-full border border-white/5 border-dashed animate-reverse-spin-slow opacity-50" />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
