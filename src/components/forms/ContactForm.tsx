"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-primary/5">
            {status === "success" ? (
                <div className="text-center py-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Nachricht gesendet!</h3>
                    <p className="text-slate-600">Wir melden uns in Kürze bei Ihnen.</p>
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                            <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Ihr Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">E-Mail</label>
                            <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="ihre@email.de" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Betreff</label>
                        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Wie können wir helfen?" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Nachricht</label>
                        <textarea required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none min-h-[150px]" placeholder="Ihre Nachricht an uns..."></textarea>
                    </div>
                    <button disabled={status === "submitting"} className="btn-primary w-full py-5 text-lg text-white disabled:opacity-50">
                        {status === "submitting" ? "Wird gesendet..." : "Nachricht senden"}
                    </button>
                </form>
            )}
        </div>
    );
}
