"use client";

import Image from "next/image";

// Placeholder clients (will be replaced with WordPress data later)
// Real client logos from 4d4dich.de
const clientsRow1 = [
    { id: 1, name: "MT24 Sicherheit", logo: "/images/assets/fd9f905da9482a90e74011b3d138f0aa.png" },
    { id: 2, name: "Hausarzt Schwerte", logo: "/images/assets/3207de4b43cb61a8c4841ea471959dec.png" },
    { id: 3, name: "Sauberbienen", logo: "/images/assets/ba251e3c999727a212612fbe3521d09f.png" },
    { id: 4, name: "Altahan Baureinigung", logo: "/images/assets/5b8be49aa064b0ffd9afd90169066532.png" },
    { id: 5, name: "Toirov Pflege", logo: "/images/assets/87c1916c29327ffb94f15bfd959b8b65.png" },
];

const clientsRow2 = [
    { id: 6, name: "Toirov Pflege", logo: "/images/assets/87c1916c29327ffb94f15bfd959b8b65.png" },
    { id: 7, name: "Altahan Baureinigung", logo: "/images/assets/5b8be49aa064b0ffd9afd90169066532.png" },
    { id: 8, name: "Sauberbienen", logo: "/images/assets/ba251e3c999727a212612fbe3521d09f.png" },
    { id: 9, name: "MT24 Sicherheit", logo: "/images/assets/fd9f905da9482a90e74011b3d138f0aa.png" },
    { id: 10, name: "Hausarzt Schwerte", logo: "/images/assets/3207de4b43cb61a8c4841ea471959dec.png" },
];

function ClientLogo({ name, logo }: { name: string; logo: string }) {
    return (
        <div className="client-logo group flex-shrink-0 w-[180px] h-[100px] flex items-center justify-center mx-4 bg-white/5 border border-primary/10 rounded-2xl backdrop-blur-sm transition-all duration-300 relative overflow-hidden hover:bg-white/10 hover:border-primary/30 hover:scale-105 hover:shadow-lg hover:shadow-primary/15">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Actual Logo Image */}
            <img
                src={logo}
                alt={name}
                className="w-auto h-16 md:h-20 object-contain p-2 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-300"
                loading="lazy"
            />
        </div>
    );
}

export default function ClientsMarquee() {
    // Duplicate for seamless infinite loop
    const duplicatedRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1];
    const duplicatedRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2];

    return (
        <section className="clients-section w-full py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden" id="clients">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-14 md:mb-20">
                <span className="inline-block text-sm font-black text-primary uppercase tracking-[0.2em] mb-3">
                    UNSERE PARTNER
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                    Vertrauen von Top-Marken
                </h2>
                <p className="text-slate-500 mt-4 max-w-xl mx-auto px-4 text-center">
                    Wir arbeiten mit führenden Unternehmen zusammen, um außergewöhnliche Ergebnisse zu erzielen
                </p>
            </div>

            {/* Marquee Wrapper */}
            <div className="relative group/marquee">
                {/* Edge fade left */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                {/* Edge fade right */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* Track 1 - Scrolls Left */}
                <div
                    className="flex items-center animate-marquee-left group-hover/marquee:[animation-play-state:paused]"
                    style={{ width: `${(180 + 32) * duplicatedRow1.length}px` }}
                >
                    {duplicatedRow1.map((client, index) => (
                        <ClientLogo
                            key={`row1-${client.id}-${index}`}
                            name={client.name}
                            logo={client.logo}
                        />
                    ))}
                </div>

                {/* Track 2 - Scrolls Right */}
                <div
                    className="flex items-center animate-marquee-right mt-6 group-hover/marquee:[animation-play-state:paused]"
                    style={{ width: `${(180 + 32) * duplicatedRow2.length}px` }}
                >
                    {duplicatedRow2.map((client, index) => (
                        <ClientLogo
                            key={`row2-${client.id}-${index}`}
                            name={client.name}
                            logo={client.logo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
