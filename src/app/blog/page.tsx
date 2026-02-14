"use client";

import Hero from "./_components/Hero";
import BlogGrid from "./_components/BlogGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export default function BlogPage() {
    return (
        <main className="bg-white min-h-screen">
            <Hero />
            <BlogGrid />
            <ContactCTA />
        </main>
    );
}
