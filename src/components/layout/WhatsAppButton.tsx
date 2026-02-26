"use client";

import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/website-text";

export default function WhatsAppButton() {
    const whatsappLink = `https://wa.me/${siteInfo.social.whatsapp.replace(/\+/g, '')}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
}
