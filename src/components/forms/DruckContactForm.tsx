"use client";

import { useState, useRef } from "react";
import { Send, UploadCloud, FileType, CheckCircle, X } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";

interface ServiceContactFormProps {
    serviceName: string;
}

export default function DruckContactForm({ serviceName }: ServiceContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => setStatus("success"), 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 p-8 rounded-3xl text-center border border-green-100">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-xl p-6">
                    <LogoIcon />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Anfrage gesendet!</h3>
                <p className="text-green-700">Wir melden uns in Kürze bei Ihnen.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-3xl font-black text-slate-900">Angebot anfordern</h3>
                <p className="text-slate-500 font-medium">für {serviceName}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Name</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" placeholder="Max Mustermann" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Email</label>
                    <input required type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" placeholder="max@beispiel.de" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Telefon (Optional)</label>
                <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" placeholder="+49 123 456789" />
            </div>

            {/* File Upload Area */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1 flex items-center justify-between">
                    <span>Druckdatei hochladen (Optional)</span>
                    <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Max. 50MB</span>
                </label>

                {!file ? (
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={cn(
                            "group border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-4 bg-slate-50/50 hover:bg-primary/5",
                            isDragging
                                ? "border-primary bg-primary/10 scale-[1.02]"
                                : "border-slate-300 hover:border-primary/50"
                        )}
                    >
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-300">
                            <UploadCloud className={cn("w-8 h-8 transition-colors", isDragging ? "text-primary" : "text-slate-400 group-hover:text-primary")} />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-slate-700">Datei hier ablegen oder klicken</p>
                            <p className="text-sm text-slate-400">PDF, AI, EPS, JPG, PNG werden unterstützt</p>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.ai,.eps,.jpg,.jpeg,.png"
                        />
                    </div>
                ) : (
                    <div className="border border-slate-200 bg-white rounded-3xl p-4 flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <FileType className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                                <p className="text-xs text-slate-500 font-medium">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={removeFile}
                            className="p-2 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Nachricht / Spezifikationen</label>
                <textarea required rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none" placeholder={`Bitte geben Sie Details an wie:\n- Gewünschte Auflage\n- Papiersorte\n- Format\n- Weiterverarbeitung...`} />
            </div>

            <button disabled={status === "submitting"} type="submit" className="w-full btn-primary py-5 rounded-2xl text-lg flex items-center justify-center gap-3 group shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]">
                {status === "submitting" ? (
                    <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Wird hochgeladen...</span>
                    </>
                ) : (
                    <>
                        <span>Kostenloses Angebot anfordern</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    );
}
