"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";
import { webAppContent } from "@/data/website-text";

export default function WebAppHero() {
    return (
        <InternalPageHero
            badge="Development"
            title="Digital, das"
            highlight="verbindet."
            description={webAppContent.intro}
            marqueeText={["CODE", "WEB", "APP", "MOBILE"]}
        />
    );
}
