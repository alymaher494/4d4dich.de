"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";
import { sendContactForm } from "@/lib/wordpress";

interface GrafikDesignContactFormProps {
    serviceName: string;
}

export default function GrafikDesignContactForm({ serviceName }: GrafikDesignContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        designType: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const success = await sendContactForm({
            ...formData,
            subject: `Design Anfrage: ${formData.designType || serviceName}`,
            service: serviceName
        });

        if (success) {
            setStatus("success");
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 p-8 rounded-3xl text-center border border-green-100">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-xl p-6">
                    <LogoIcon />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Anfrage gesendet!</h3>
                <p className="text-green-700">Wir melden uns in Kürze mit kreativen Ideen.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-center font-bold">
                    Fehler beim Senden. Bitte versuchen Sie es erneut.
                </div>
            )}
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-3xl font-black text-slate-900">Design anfragen</h3>
                <p className="text-slate-500 font-medium">für {serviceName}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Name</label>
                    <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" placeholder="Max Mustermann" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Email</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" placeholder="max@beispiel.de" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Art des Designs</label>
                <select name="designType" value={formData.designType} onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none">
                    <option value="">Bitte wählen...</option>
                    <option value="logo">Logo & Branding</option>
                    <option value="social">Social Media Design</option>
                    <option value="print">Drucksachen (Flyer, Broschüren..)</option>
                    <option value="ui">Web & App Design (UI/UX)</option>
                    <option value="other">Sonstiges</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Beschreibung / Idee</label>
                <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none" placeholder="Beschreiben Sie kurz Ihre Wünsche oder laden Sie Beispiele hoch..." />
            </div>

            <button disabled={status === "submitting"} type="submit" className="w-full btn-primary py-5 rounded-2xl text-lg flex items-center justify-center gap-3 group shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]">
                {status === "submitting" ? (
                    <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Wird gesendet...</span>
                    </>
                ) : (
                    <>
                        <span>Design-Projekt starten</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    );
}
