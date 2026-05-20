"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { WPTestimonial, GoogleReview, getFeaturedImageUrl, stripHtml } from "@/lib/wordpress";

interface TestimonialData {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
    rating?: number;
    date?: string;
}

interface TestimonialsProps {
    initialTestimonials?: WPTestimonial[];
    googleReviews?: GoogleReview[];
    title?: string;
}

const staticTestimonials: TestimonialData[] = [
    {
        id: "1",
        name: "Julia Müller",
        role: "Marketing Director, Luxus",
        content: "Die Zusammenarbeit mit 4D war ein Gamechanger. Unsere Brand Awareness ist um 300% gestiegen.",
        image: "/images/assets/c988083a8c13aa35110542ee2ef912fd.jpg",
        rating: 5
    },
    {
        id: "2",
        name: "Markus Weber",
        role: "CEO, TechStart",
        content: "Unglaubliche Qualität und Geschwindigkeit. Das neue Design hat unsere Kunden sofort überzeugt.",
        image: "/images/assets/905f72558c86991e5d8bebc8c2865d02.jpg",
        rating: 5
    },
    {
        id: "3",
        name: "Sarah Klein",
        role: "Inhaberin, Cafe Velo",
        content: "Von der Beratung bis zum Druck – alles aus einer Hand. Einfach, professionell und wunderschön.",
        image: "/images/assets/0669cd1a95abf8b46d8b3455b41f42b1.jpg",
        rating: 5
    }
];

export default function Testimonials({ initialTestimonials = [], googleReviews = [], title }: TestimonialsProps) {
    // Map WordPress testimonials
    const wpTestimonials: TestimonialData[] = initialTestimonials.map(item => ({
        id: item.id.toString(),
        name: item.title.rendered,
        role: (item.acf?.role as string) || "Kunde",
        content: stripHtml(item.content.rendered),
        image: getFeaturedImageUrl(item) || "/images/assets/0669cd1a95abf8b46d8b3455b41f42b1.jpg",
        rating: Number(item.acf?.rating) || 5
    }));

    // Map Google Reviews to TestimonialData format
    const mappedGoogle: TestimonialData[] = googleReviews.map(r => ({
        id: r.id,
        name: r.name,
        role: r.role,
        content: r.content,
        image: r.image,
        rating: r.rating,
        date: r.date
    }));

    // Use Google Reviews if available, otherwise WordPress, otherwise static
    const combinedData = mappedGoogle.length > 0
        ? [...mappedGoogle, ...wpTestimonials].slice(0, 6)
        : wpTestimonials.length > 0 ? wpTestimonials : staticTestimonials;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="inline-block text-sm font-black text-secondary uppercase tracking-[0.2em] mb-2">
                        KUNDENSTIMMEN
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                        {title || "Das sagen unsere Partner"}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {combinedData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/20 transition-colors" />

                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < (item.rating || 5) ? "fill-current" : "text-slate-200"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic flex-grow line-clamp-6">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-slate-900 truncate">{item.name}</h4>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.role}</span>
                                        {item.date && (
                                            <span className="text-[9px] text-slate-300">{item.date}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
