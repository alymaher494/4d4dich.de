"use client";

import InternalPageHero from "@/components/ui/InternalPageHero";
import { portfolioContent } from "@/data/website-text";

export default function PortfolioHero() {
    return (
        <InternalPageHero
            badge="Explore Art"
            title={portfolioContent.title.split(' ')[0]}
            highlight="Portfolio."
            description={portfolioContent.subtitle}
            marqueeText={["DIGITAL EXPERIENCES", "CREATIVE DESIGN", "PRINT MANAGEMENT"]}
        />
    );
}

// Add marquee animation in your globals.css if not present:
/*
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
*/
