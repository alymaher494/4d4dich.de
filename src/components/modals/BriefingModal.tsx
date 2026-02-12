"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Check, Send, Sparkles, Rocket, Globe, Palette, Cog, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BriefingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

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
            { id: "contactEmail", label: "Ihre E-Mail für das Angebot", type: "email", placeholder: "name@beispiel.de" },
        ]
    }
];

export default function BriefingModal({ isOpen: initialIsOpen, onClose }: BriefingModalProps) {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Sync state with prop
    useEffect(() => {
        setIsOpen(initialIsOpen);
    }, [initialIsOpen]);

    // Handle global trigger
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-briefing', handleOpen);
        return () => window.removeEventListener('open-briefing', handleOpen);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset state when closing
            setTimeout(() => {
                if (!isOpen) {
                    setCurrentStep(0);
                    setIsSubmitted(false);
                }
            }, 300);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

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
        // Here you would typically send the data to your backend/API
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90dvh] md:max-h-[800px] my-auto"
                    >
                        {!isSubmitted ? (
                            <>
                                {/* Header */}
                                <div className="p-5 md:p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0 rounded-t-3xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            {(() => {
                                                const StepIcon = steps[currentStep].icon;
                                                return <StepIcon className="w-5 h-5 md:w-6 md:h-6" />;
                                            })()}
                                        </div>
                                        <div>
                                            <span className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em] block mb-1">Schritt {currentStep + 1} von {steps.length}</span>
                                            <h2 className="text-lg md:text-xl font-black text-slate-900 leading-tight">{steps[currentStep].title}</h2>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm group"
                                        title="Schließen"
                                    >
                                        <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform" />
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-1 bg-slate-100 shrink-0">
                                    <div
                                        className="h-full bg-primary transition-all duration-500 ease-out"
                                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                    />
                                </div>

                                {/* Body */}
                                <div className="p-5 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -15 }}
                                            transition={{ duration: 0.25 }}
                                            className="space-y-6"
                                        >
                                            {steps[currentStep].questions.map((q) => (
                                                <div key={q.id} className="space-y-3">
                                                    <label className="block text-sm md:text-base font-bold text-slate-800">{q.label}</label>

                                                    {/* Input rendering logic remains same but with updated styling for touch targets */}
                                                    {q.type === "text" || q.type === "email" ? (
                                                        <input
                                                            type={q.type}
                                                            placeholder={q.placeholder}
                                                            value={formData[q.id] || ""}
                                                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base font-medium placeholder:text-slate-400"
                                                        />
                                                    ) : q.type === "textarea" ? (
                                                        <textarea
                                                            placeholder={q.placeholder}
                                                            rows={4}
                                                            value={formData[q.id] || ""}
                                                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base font-medium resize-none placeholder:text-slate-400"
                                                        />
                                                    ) : q.type === "options" ? (
                                                        <div className="grid grid-cols-1 gap-3">
                                                            {q.options?.map((opt) => (
                                                                <button
                                                                    key={opt}
                                                                    onClick={() => handleInputChange(q.id, opt)}
                                                                    className={cn(
                                                                        "px-5 py-4 rounded-xl border-2 text-left text-sm md:text-base font-bold transition-all flex items-center justify-between gap-2 group",
                                                                        formData[q.id] === opt
                                                                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                                                            : "bg-white border-slate-200 text-slate-600 hover:border-primary/50 hover:bg-primary/5"
                                                                    )}
                                                                >
                                                                    <span className="leading-tight">{opt}</span>
                                                                    <div className={cn(
                                                                        "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                                                                        formData[q.id] === opt ? "bg-white border-white text-primary" : "border-slate-300 group-hover:border-primary/50"
                                                                    )}>
                                                                        {formData[q.id] === opt && <Check className="w-3.5 h-3.5" />}
                                                                    </div>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    ) : q.type === "multi-select" ? (
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                            {q.options?.map((opt) => (
                                                                <button
                                                                    key={opt}
                                                                    onClick={() => handleMultiSelect(q.id, opt)}
                                                                    className={cn(
                                                                        "px-4 py-3.5 rounded-xl border-2 text-left text-sm font-bold transition-all flex items-center justify-between gap-2 group",
                                                                        (formData[q.id] || []).includes(opt)
                                                                            ? "bg-secondary border-secondary text-white shadow-lg shadow-secondary/20"
                                                                            : "bg-white border-slate-200 text-slate-600 hover:border-secondary/50 hover:bg-secondary/5"
                                                                    )}
                                                                >
                                                                    <span className="leading-tight">{opt}</span>
                                                                    <div className={cn(
                                                                        "w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors",
                                                                        (formData[q.id] || []).includes(opt) ? "bg-white border-white text-secondary" : "border-slate-300 group-hover:border-secondary/50"
                                                                    )}>
                                                                        {(formData[q.id] || []).includes(opt) && <Check className="w-3 h-3" />}
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

                                {/* Footer */}
                                <div className="p-5 md:p-8 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0 rounded-b-3xl">
                                    <button
                                        onClick={currentStep === 0 ? handleClose : prevStep}
                                        className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2"
                                    >
                                        {currentStep === 0 ? (
                                            <>Abbrechen</>
                                        ) : (
                                            <>
                                                <ChevronLeft className="w-4 h-4" />
                                                Zurück
                                            </>
                                        )}
                                    </button>

                                    <div className="flex gap-1.5 opacity-0 md:opacity-100 transition-opacity">
                                        {steps.map((_, i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    "h-1.5 rounded-full transition-all duration-300",
                                                    i === currentStep ? "w-8 bg-primary" :
                                                        i < currentStep ? "w-2 bg-primary/40" : "w-1.5 bg-slate-200"
                                                )}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextStep}
                                        className="btn-primary py-3 px-8 text-sm md:text-base flex items-center gap-2 group shadow-xl shadow-primary/20"
                                    >
                                        {currentStep === steps.length - 1 ? "Anfrage Senden" : "Weiter"}
                                        {currentStep === steps.length - 1 ? <Send className="w-4 h-4 md:w-5 md:h-5" /> : <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="p-12 md:p-16 text-center space-y-6 flex flex-col items-center justify-center h-full min-h-[400px]">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 15 }}
                                    className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4"
                                >
                                    <Check className="w-12 h-12" />
                                </motion.div>
                                <div className="space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">Vielen Dank!</h2>
                                    <p className="text-lg md:text-xl text-slate-600 max-w-md mx-auto leading-relaxed">
                                        Wir haben Ihr Briefing erhalten. Unser Team wird die Details analysieren und Ihnen in Kürze ein maßgeschneidertes Angebot zusenden.
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="btn-primary px-10 py-4 text-lg mt-4 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                                >
                                    Fenster schließen
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
