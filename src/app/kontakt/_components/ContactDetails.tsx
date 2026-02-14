"use client";

import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { siteInfo } from "@/data/website-text";

export default function ContactDetails() {
    return (
        <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-6">Kontaktinformationen</h3>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Adresse</p>
                            <p className="text-slate-600">{siteInfo.address}</p>
                            <p className="text-slate-500 text-sm mt-1">{siteInfo.location}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">E-Mail</p>
                            <a href={`mailto:${siteInfo.email}`} className="text-slate-600 hover:text-primary transition-colors">
                                {siteInfo.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Telefon</p>
                            <a href={`tel:${siteInfo.phone}`} className="text-slate-600 hover:text-primary transition-colors">
                                {siteInfo.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">WhatsApp</p>
                            <a href={`https://wa.me/${siteInfo.social.whatsapp}`} className="text-slate-600 hover:text-primary transition-colors">
                                Chat starten
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Öffnungszeiten
                </h3>
                <ul className="space-y-3 relative z-10">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Mo - Fr</span>
                        <span className="font-bold">09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Sa</span>
                        <span className="font-bold">10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-slate-400">So</span>
                        <span className="text-primary font-bold">Geschlossen</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
