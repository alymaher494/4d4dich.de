"use client";

import { useState } from "react";
import { sendContactForm } from "@/lib/wordpress";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const success = await sendContactForm(formData);

        if (success) {
            setStatus("success");
        } else {
            setStatus("error");
            // Auto revert after 3s
            setTimeout(() => setStatus("idle"), 3000);
        }
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
                    {status === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-center font-bold">
                            Fehler beim Senden. Bitte versuchen Sie es erneut.
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                type="text"
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                                placeholder="Ihr Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">E-Mail</label>
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                type="email"
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                                placeholder="ihre@email.de"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Betreff</label>
                        <input
                            required
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                            placeholder="Wie können wir helfen?"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Nachricht</label>
                        <textarea
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none min-h-[150px]"
                            placeholder="Ihre Nachricht an uns..."
                        ></textarea>
                    </div>
                    <button disabled={status === "submitting"} className="btn-primary w-full py-5 text-lg text-white disabled:opacity-50">
                        {status === "submitting" ? "Wird gesendet..." : "Nachricht senden"}
                    </button>
                </form>
            )}
        </div>
    );
}
