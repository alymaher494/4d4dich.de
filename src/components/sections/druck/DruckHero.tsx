"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";
import { druckContent } from "@/data/website-text";

export default function DruckHero() {
    return (
        <InternalPageHero
            badge="Premium Print"
            title="Druck, der"
            highlight="beeindruckt."
            description={druckContent.page_title}
            marqueeText={["PRINT", "QUALITY", "OFFSET", "DIGITAL"]}
        />
    );
}
