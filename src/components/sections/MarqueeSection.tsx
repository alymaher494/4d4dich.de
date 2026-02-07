"use client";

import { motion } from "framer-motion";
import {
    Facebook, Instagram, Linkedin, Twitter, Youtube,
    ShoppingCart, LineChart, Globe, Smartphone, Mail
} from "lucide-react";

// Items to display in the marquee
const items = [
    { id: 1, name: "Google Ads", icon: Globe },
    { id: 2, name: "Meta Ads", icon: Facebook },
    { id: 3, name: "Instagram", icon: Instagram },
    { id: 4, name: "LinkedIn", icon: Linkedin },
    { id: 5, name: "Twitter/X", icon: Twitter },
    { id: 6, name: "YouTube", icon: Youtube },
    { id: 7, name: "E-Commerce", icon: ShoppingCart },
    { id: 8, name: "SEO Optimization", icon: LineChart },
    { id: 9, name: "App Development", icon: Smartphone },
    { id: 10, name: "Email Marketing", icon: Mail },
];

export default function MarqueeSection() {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 md:gap-8 items-center animate-marquee-left w-max hover:[animation-play-state:paused] cursor-default">
                {duplicatedItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm min-w-max hover:shadow-md hover:border-primary/20 hover:scale-105 transition-all duration-300"
                        >
                            <span className="p-2 rounded-full bg-slate-50 text-primary">
                                <Icon className="w-5 h-5" />
                            </span>
                            <span className="font-bold text-slate-700 text-sm md:text-base">
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
