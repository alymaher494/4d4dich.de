"use client";

import { motion } from "framer-motion";
import { Share2, Search, Target } from "lucide-react";

const marketingFeatures = [
    { title: "Social Media", description: "Increase your reach and engagement on all platforms.", Icon: Share2, bg: "bg-blue-50", color: "text-blue-600" },
    { title: "SEO Optimization", description: "Be found by your customers when they search for you.", Icon: Search, bg: "bg-green-50", color: "text-green-600" },
    { title: "Digital Ads", description: "Highly targeted campaigns on Meta, Google and LinkedIn.", Icon: Target, bg: "bg-red-50", color: "text-red-600" },
];

export default function MarketingFeatures() {
    return (
        <section className="py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {marketingFeatures.map((f, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/5 transition-all space-y-6 group"
                        >
                            <div className={`w-20 h-20 rounded-[2rem] ${f.bg} flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}>
                                <f.Icon className={`w-10 h-10 ${f.color}`} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900">{f.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
