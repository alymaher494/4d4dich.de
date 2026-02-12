"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import Image from "next/image";
import Link from "next/link";

import { blogContent } from "@/data/website-text";

import BlogHero from "@/components/sections/blog/BlogHero";

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen">
            <BlogHero />

            {/* Blog Grid */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogContent.posts.map((post, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full border border-slate-100"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold group/link">
                                        Weiterlesen <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </div>
    );
}
