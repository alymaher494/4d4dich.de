"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Wie läuft die Zusammenarbeit ab?",
        answer: "Wir starten mit einem kostenlosen Erstgespräch, um Ihre Ziele zu verstehen. Danach erhalten Sie ein maßgeschneidertes Angebot. Nach Beauftragung halten wir Sie mit regelmäßigen Updates auf dem Laufenden."
    },
    {
        question: "Bieten Sie auch Hosting und Wartung an?",
        answer: "Ja, wir bieten umfassende Wartungspakete für Webseiten und Apps an, damit Sie sich voll auf Ihr Kerngeschäft konzentrieren können."
    },
    {
        question: "Wie lange dauert die Erstellung einer Webseite?",
        answer: "Das hängt vom Umfang ab. Eine Landingpage dauert ca. 1-2 Wochen, eine Unternehmenswebseite 3-5 Wochen und komplexe Web-Apps oder Shops 6-12 Wochen."
    },
    {
        question: "Arbeiten Sie mit Wordpress oder Programmierung?",
        answer: "Beides! Wir nutzen WordPress für leicht pflegbare Webseiten und moderne Frameworks wie Next.js oder React für individuelle Web-Apps und High-Performance-Lösungen."
    },
    {
        question: "Was kostet eine Zusammenarbeit?",
        answer: "Unsere Preise sind transparent und projektbezogen. Kontaktieren Sie uns für ein unverbindliches Angebot, das genau auf Ihr Budget und Ihre Anforderungen zugeschnitten ist."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-white" id="faq">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Häufig gestellte Fragen</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">Wichtige <span className="text-secondary">Antworten.</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50 transition-all hover:bg-white hover:shadow-md">
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                                {activeIndex === idx ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0 ml-4" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
