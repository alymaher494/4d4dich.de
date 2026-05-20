"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/data/website-text";
import { User2 } from "lucide-react";
import Image from "next/image";

import { WPPost, getFeaturedImageUrl } from "@/lib/wordpress";

interface HomeTeamProps {
    initialTeam?: WPPost[];
}

export default function TeamSection({ initialTeam = [] }: HomeTeamProps) {
    const { team: staticTeam } = homeContent;

    // Map WP team to our format
    const wpMembers = initialTeam.map(member => ({
        name: member.title.rendered,
        role: (member.acf?.role as string) || "Teammitglied",
        image: getFeaturedImageUrl(member) || "/images/assets/ba251e3c999727a212612fbe3521d09f.png"
    }));

    const members = initialTeam.length > 0 ? wpMembers : staticTeam.members;

    return (
        <section id="team" className="section-padding bg-white">
            <div className="text-center mb-16 space-y-4">
                <span className="inline-block text-sm font-black text-primary uppercase tracking-[0.2em] mb-2">
                    DAS EXPERTENTEAM
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                    Lernen Sie unsere <span className="text-secondary">Experten kennen.</span>
                </h2>
                <p className="text-slate-600 italic max-w-2xl mx-auto text-lg">
                    "{staticTeam.quote}"
                </p>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 md:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full max-w-[100vw]">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex-none w-[280px] md:w-[300px] snap-center"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 mb-6 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 280px, 300px"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                                <span className="text-sm font-medium uppercase tracking-wider">{member.role}</span>
                                <h4 className="text-xl font-bold">{member.name}</h4>
                            </div>
                        </div>
                        <div className="text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                            <p className="text-slate-500 text-sm">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
