"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";
import { grafikDesignContent } from "@/data/website-text";

export default function GrafikDesignHero() {
    return (
        <InternalPageHero
            badge="Creative Studio"
            title="Design, das"
            highlight="begeistert."
            description={grafikDesignContent.page_title}
            marqueeText={["CREATIVE", "DESIGN", "BRANDING", "UI/UX"]}
        />
    );
}
