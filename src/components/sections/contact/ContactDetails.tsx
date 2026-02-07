import { siteInfo } from "@/data/website-text";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
import ContactInfoCard from "@/components/cards/ContactInfoCard";

export default function ContactDetails() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactInfoCard
                    icon={Phone}
                    title="Anrufen"
                    value={siteInfo.phone}
                    href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                />
                <ContactInfoCard
                    icon={MessageCircle}
                    title="WhatsApp"
                    value="Jetzt schreiben"
                    href={`https://wa.me/${siteInfo.social.whatsapp}`}
                    isPrimary
                />
                <ContactInfoCard
                    icon={Mail}
                    title="E-Mail"
                    value={siteInfo.email}
                    href={`mailto:${siteInfo.email}`}
                />
                <ContactInfoCard
                    icon={Instagram}
                    title="Instagram"
                    value="@4d4dich"
                    href={siteInfo.social.instagram}
                />
            </div>

            <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white text-primary">
                    <MapPin className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Unser Standort</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                        {siteInfo.address}<br />
                        {siteInfo.location}
                    </p>
                </div>
            </div>

            <div className="p-8 rounded-[3rem] bg-slate-900 text-white flex items-start gap-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[50px] rounded-full" />
                <div className="p-4 rounded-2xl bg-white/5 text-primary relative z-10">
                    <Clock className="w-8 h-8" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">Öffnungszeiten</h3>
                    <p className="text-slate-400">Mo. - Fr.: 09:00 - 18:00 Uhr</p>
                    <p className="text-slate-400">Sa.: Nach Vereinbarung</p>
                </div>
            </div>
        </div>
    );
}
