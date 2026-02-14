"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Printer, Palette, MonitorSmartphone, TrendingUp } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const services = [
    {
        id: "druck",
        title: "Druck & Werbetechnik",
        description: "Hochwertige Printerzeugnisse für Ihren professionellen Auftritt.",
        icon: Printer,
        link: "/druck",
        prices: [
            { name: "500 Visitenkarten", price: "ab 49€" },
            { name: "1000 Flyer (DIN A5)", price: "ab 89€" },
            { name: "Roll-up Banner", price: "ab 79€" },
            { name: "Fahrzeugbeschriftung", price: "auf Anfrage" },
        ]
    },
    {
        id: "design",
        title: "Grafik & Branding",
        description: "Einzigartige Designs, die im Gedächtnis bleiben.",
        icon: Palette,
        link: "/grafik-design",
        prices: [
            { name: "Logo Design Paket", price: "ab 299€" },
            { name: "Corporate Identity", price: "ab 899€" },
            { name: "Social Media Templates", price: "ab 149€" },
            { name: "Broschüren Design", price: "ab 199€" },
        ]
    },
    {
        id: "web",
        title: "Web & App Entwicklung",
        description: "Moderne Webseiten und Apps für Ihr Business.",
        icon: MonitorSmartphone,
        link: "/web-app",
        prices: [
            { name: "Landing Page", price: "ab 499€" },
            { name: "Unternehmens-Website", price: "ab 1.499€" },
            { name: "E-Commerce Shop", price: "ab 2.499€" },
            { name: "Wartung & Hosting", price: "ab 49€ / Monat" },
        ]
    },
    {
        id: "marketing",
        title: "Digital Marketing",
        description: "Mehr Reichweite und Umsatz durch gezielte Kampagnen.",
        icon: TrendingUp,
        link: "/marketing",
        prices: [
            { name: "SEO Audit", price: "Kostenlos" },
            { name: "Google Ads Setup", price: "ab 299€" },
            { name: "Social Media Betreuung", price: "ab 450€ / Monat" },
            { name: "Content Erstellung", price: "auf Anfrage" },
        ]
    }
];

export default function ServicesList() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        {...fadeInUp}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col overflow-hidden"
                    >
                        {/* Smart Card Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-primary/20">
                            <service.icon className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                        <p className="text-slate-600 mb-8 text-lg">{service.description}</p>

                        {/* Pricing Table */}
                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 flex-grow">
                            <h3 className="font-bold text-slate-900 mb-4 px-2">Preisliste (Richtwerte, zzgl. MwSt.)</h3>
                            <div className="space-y-3">
                                {service.prices.map((price, pIdx) => (
                                    <div key={pIdx} className="flex justify-between items-center p-3 rounded-xl hover:bg-white transition-colors">
                                        <span className="text-slate-600 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                            {price.name}
                                        </span>
                                        <span className="font-bold text-slate-900">{price.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={service.link}
                            className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-primary transition-colors group"
                        >
                            Details ansehen
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
