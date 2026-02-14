"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Send, Sparkles, Rocket, Globe, Palette, Cog, Calendar } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: "basics",
        title: "Grundlagen",
        icon: Globe,
        questions: [
            { id: "companyName", label: "Wie heißt Ihre Firma / Marke?", type: "text", placeholder: "Musterfirma GmbH" },
            { id: "businessActivity", label: "Was macht Ihr Unternehmen genau?", type: "textarea", placeholder: "Beschreiben Sie kurz Ihr Angebot..." },
            { id: "existingWebsite", label: "Gibt es schon eine bestehende Website?", type: "text", placeholder: "www.beispiel.de (falls vorhanden)" },
        ]
    },
    {
        id: "goals",
        title: "Ihre Ziele",
        icon: Rocket,
        questions: [
            {
                id: "websiteGoal",
                label: "Was ist das Hauptziel der Website?",
                type: "options",
                options: ["Mehr Kundenanfragen", "Online verkaufen (Shop)", "Termine buchen lassen", "Reine Information"]
            }
        ]
    },
    {
        id: "content",
        title: "Inhalte",
        icon: Palette,
        questions: [
            { id: "pageCount", label: "Wie viele Seiten werden ca. benötigt?", type: "text", placeholder: "z.B. 5-10 Seiten" },
            {
                id: "contentStatus",
                label: "Sind Texte und Bilder bereits vorhanden?",
                type: "options",
                options: ["Alles vorhanden", "Texte fehlen noch", "Bilder fehlen noch", "Muss alles erstellt werden"]
            }
        ]
    },
    {
        id: "functions",
        title: "Funktionen",
        icon: Cog,
        questions: [
            {
                id: "features",
                label: "Welche Funktionen werden benötigt?",
                type: "multi-select",
                options: ["Kontaktformular", "Online-Buchung", "WhatsApp-Button", "Mehrsprachigkeit", "Google Maps", "Bewertungen", "Online-Shop"]
            }
        ]
    },
    {
        id: "design",
        title: "Design & Stil",
        icon: Sparkles,
        questions: [
            { id: "hasLogo", label: "Gibt es bereits ein Logo und Firmenfarben?", type: "options", options: ["Ja, alles vorhanden", "Nur Logo vorhanden", "Nein, muss erstellt werden"] },
            { id: "examples", label: "Gibt es Websites, die Ihnen besonders gefallen?", type: "text", placeholder: "Links zu Beispiel-Websites" },
        ]
    },
    {
        id: "tech-time",
        title: "Technik & Zeit",
        icon: Calendar,
        questions: [
            { id: "hostingStatus", label: "Haben Sie bereits Hosting oder eine Domain?", type: "options", options: ["Ja, beides vorhanden", "Nur Domain vorhanden", "Nein, brauche Hilfe dabei"] },
            { id: "timeline", label: "Wann soll das Projekt fertig sein?", type: "text", placeholder: "z.B. In 4 Wochen" },
            { id: "contactEmail", label: "Ihre E-Mail / Telefon für das Angebot", type: "text", placeholder: "name@beispiel.de" },
        ]
    }
];

export default function BriefingForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (id: string, value: any) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleMultiSelect = (id: string, option: string) => {
        const currentOptions = formData[id] || [];
        if (currentOptions.includes(option)) {
            handleInputChange(id, currentOptions.filter((o: string) => o !== option));
        } else {
            handleInputChange(id, [...currentOptions, option]);
        }
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Briefing Data:", formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                    <Rocket className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Vielen Dank!</h2>
                <p className="text-xl text-slate-600 max-w-md mx-auto mb-10">
                    Wir haben Ihr Briefing erhalten. Unser Team wird die Details analysieren und Ihnen in Kürze ein maßgeschneidertes Angebot zusenden.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary px-12 py-4"
                >
                    Neues Briefing starten
                </button>
            </motion.div>
        );
    }

    const StepIcon = steps[currentStep].icon;

    return (
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Form Progress Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary">
                            <StepIcon className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Schritt {currentStep + 1} von {steps.length}</span>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900">{steps[currentStep].title}</h3>
                        </div>
                    </div>

                    {/* Progress Bar (Desktop) */}
                    <div className="flex gap-2">
                        {steps.map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-500",
                                    i === currentStep ? "w-12 bg-primary" : i < currentStep ? "w-4 bg-primary/40" : "w-4 bg-slate-200"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Body */}
            <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-10"
                    >
                        {steps[currentStep].questions.map((q) => (
                            <div key={q.id} className="space-y-4">
                                <label className="block text-xl font-bold text-slate-800">{q.label}</label>

                                {q.type === "text" || q.type === "email" ? (
                                    <input
                                        type={q.type}
                                        placeholder={q.placeholder}
                                        value={formData[q.id] || ""}
                                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                                        className="w-full px-8 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-lg"
                                    />
                                ) : q.type === "textarea" ? (
                                    <textarea
                                        placeholder={q.placeholder}
                                        rows={4}
                                        value={formData[q.id] || ""}
                                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                                        className="w-full px-8 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-lg resize-none"
                                    />
                                ) : q.type === "options" ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {q.options?.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => handleInputChange(q.id, opt)}
                                                className={cn(
                                                    "px-8 py-5 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between group",
                                                    formData[q.id] === opt
                                                        ? "bg-primary border-primary text-white"
                                                        : "bg-white border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                                                )}
                                            >
                                                {opt}
                                                <div className={cn(
                                                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                                    formData[q.id] === opt ? "bg-white border-white text-primary" : "border-slate-200"
                                                )}>
                                                    {formData[q.id] === opt && <div className="w-3 h-3"><LogoIcon /></div>}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : q.type === "multi-select" ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {q.options?.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => handleMultiSelect(q.id, opt)}
                                                className={cn(
                                                    "px-6 py-4 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between group",
                                                    (formData[q.id] || []).includes(opt)
                                                        ? "bg-secondary border-secondary text-white"
                                                        : "bg-white border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                                                )}
                                            >
                                                {opt}
                                                <div className={cn(
                                                    "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                                                    (formData[q.id] || []).includes(opt) ? "bg-white border-white text-secondary" : "border-slate-200"
                                                )}>
                                                    {(formData[q.id] || []).includes(opt) && <div className="w-3 h-3"><LogoIcon /></div>}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Form Footer */}
            <div className="p-8 md:p-12 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={cn(
                        "flex items-center gap-2 font-bold text-slate-500 hover:text-slate-900 transition-colors py-4 px-6 rounded-2xl hover:bg-white",
                        currentStep === 0 && "opacity-0 pointer-events-none"
                    )}
                >
                    <ChevronLeft className="w-5 h-5" />
                    Vorheriger Schritt
                </button>

                <button
                    onClick={nextStep}
                    className="w-full md:w-auto btn-primary py-5 px-12 flex items-center justify-center gap-3 group text-xl"
                >
                    {currentStep === steps.length - 1 ? "Angebot anfordern" : "Nächster Schritt"}
                    {currentStep === steps.length - 1 ? <Send className="w-5 h-5" /> : <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                </button>
            </div>
        </div>
    );
}
