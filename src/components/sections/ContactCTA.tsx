"use client";

import { motion } from "framer-motion";
import { homeContent, siteInfo } from "@/data/website-text";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
    const { cta } = homeContent;

    return (
        <section className="section-padding py-32 text-center relative overflow-hidden bg-white">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto space-y-10"
            >
                <div className="space-y-4">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">{cta.title}</h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                        Bereit für den nächsten Schritt?
                    </h3>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed">
                    {cta.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href={`https://wa.me/${siteInfo.social.whatsapp}`}
                        className="btn-animated btn-animated-lg"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {cta.button}
                    </Link>

                    <Link
                        href="/kontakt"
                        className="btn-animated-outline btn-animated-lg"
                    >
                        E-Mail senden
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
