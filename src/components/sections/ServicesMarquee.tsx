"use client";

import { motion } from "framer-motion";

const services = [
    "Druckservice",
    "Grafik Design",
    "Webentwicklung",
    "App Entwicklung",
    "Online Marketing",
    "SEO Optimierung",
    "E-Commerce",
    "Social Media",
    "Branding",
    "Corporate Identity",
    "Content Creation",
    "Werbetechnik"
];

export default function ServicesMarquee() {
    const duplicatedServices = [...services, ...services, ...services];

    return (
        <section className="py-24 overflow-hidden bg-white relative flex flex-col justify-center items-center min-h-[400px]">
            {/* Background Text/Pattern - Optional */}
            <div className="absolute inset-0 bg-slate-50/50 -z-10" />

            <div className="relative w-full py-10 flex flex-col items-center justify-center gap-0 overflow-hidden">
                {/* Row 1 - Green, Tilted + */}
                <div className="w-[110%] -rotate-3 bg-primary py-4 md:py-6 shadow-lg relative z-10">
                    <div className="flex gap-8 md:gap-12 animate-marquee-left whitespace-nowrap items-center">
                        {duplicatedServices.map((service, index) => (
                            <span key={`row1-${index}`} className="text-white font-black text-2xl md:text-4xl uppercase tracking-widest flex items-center gap-8 md:gap-12">
                                {service}
                                <img
                                    src="/logo-mark.svg"
                                    alt="4D Logo"
                                    className="h-8 md:h-12 w-auto brightness-0 invert opacity-60"
                                />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Pink/Secondary, Tilted - (Crosses the first one) */}
                <div className="w-[110%] rotate-3 bg-secondary py-4 md:py-6 shadow-xl relative z-20 -mt-6 md:-mt-8 border-t-4 border-white/20">
                    <div className="flex gap-8 md:gap-12 animate-marquee-right whitespace-nowrap items-center">
                        {duplicatedServices.map((service, index) => (
                            <span key={`row2-${index}`} className="text-white font-black text-2xl md:text-4xl uppercase tracking-widest flex items-center gap-8 md:gap-12">
                                {service}
                                <img
                                    src="/logo-mark.svg"
                                    alt="4D Logo"
                                    className="h-8 md:h-12 w-auto brightness-0 invert opacity-60"
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
