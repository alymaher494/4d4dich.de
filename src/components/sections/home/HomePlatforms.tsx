"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";
import Link from "next/link";

// Slider images - Portfolio/Use cases
const sliderImages1 = [
    { id: 1, src: "/images/assets/9c6dc45f67e802a56536eae1cce455f0.jpg", alt: "Web Design" },
    { id: 2, src: "/images/assets/adc5870e47b9321f52239f14e9bce7f4.jpg", alt: "Graphic Design" },
    { id: 3, src: "/images/assets/912dab1100f78dc19338a88d76138e51.jpg", alt: "Marketing" },
];

const sliderImages2 = [
    { id: 1, src: "/images/assets/7ee84d25e6b992c4a98bc056a8cc1f26.jpg", alt: "Print" },
    { id: 2, src: "/images/assets/bf47d10acf098bf9d872f522859d2f5d.jpg", alt: "App Design" },
    { id: 3, src: "/images/assets/357213b9488262f66fa0ba3e1b5a2d4b.jpg", alt: "Branding" },
];

const benefits = [
    "Professionelles Webdesign & Entwicklung",
    "Kreatives Grafikdesign & Branding",
    "Effektives digitales Marketing",
    "Hochwertiger Druck & Werbematerialien",
    "Social Media Management",
];

export default function PlatformsSection() {
    // Duplicate images for seamless loop
    const duplicated1 = [...sliderImages1, ...sliderImages1, ...sliderImages1, ...sliderImages1];
    const duplicated2 = [...sliderImages2, ...sliderImages2, ...sliderImages2, ...sliderImages2];

    return (
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                            Unsere Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Wir arbeiten auf allen Plattformen{" "}
                            <span className="text-secondary">
                                für ein Ziel: Ihren Erfolg
                            </span>
                        </h2>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4"
                                >
                                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-lg shadow-white/10">
                                        <img src="/0L.png" alt="Icon" className="w-full h-full object-contain" />
                                    </span>
                                    <span className="text-slate-300 text-lg">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <Link href="/kontakt" className="btn-animated">
                            <span>Kostenlose Beratung</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Sliders Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2 relative h-[400px] md:h-[500px]"
                    >
                        {/* Fade overlays */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />

                        <div className="flex gap-6 h-full overflow-hidden">
                            {/* Slider 1 - Moving Up */}
                            <div className="flex-1 overflow-hidden">
                                <div className="animate-slide-up space-y-6">
                                    {duplicated1.map((item, index) => (
                                        <div
                                            key={`up-${item.id}-${index}`}
                                            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slider 2 - Moving Down */}
                            <div className="flex-1 overflow-hidden">
                                <div className="animate-slide-down space-y-6">
                                    {duplicated2.map((item, index) => (
                                        <div
                                            key={`down-${item.id}-${index}`}
                                            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
