"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ServiceContactFormProps {
    serviceName: string;
}

export default function ServiceContactForm({ serviceName }: ServiceContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => setStatus("success"), 2000);
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 p-8 rounded-3xl text-center border border-green-100">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Anfrage gesendet!</h3>
                <p className="text-green-700">Wir melden uns in Kürze bei Ihnen.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Angebot anfordern</h3>
                <p className="text-slate-500">für {serviceName}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Max Mustermann" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="max@beispiel.de" />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Telefon (Optional)</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+49 123 456789" />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Nachricht</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder={`Ich interessiere mich für ${serviceName}...`} />
            </div>

            <button disabled={status === "submitting"} type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                {status === "submitting" ? "Wird gesendet..." : "Anfrage senden"}
                {!status && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
        </form>
    );
}
